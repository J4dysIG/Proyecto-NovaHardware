console.log(`     
         ⢀⣴⣶⠿⠟⠻⠿⢷⣦
    ⠀⠀⠀⠀⣾⠏⠀⠀ ⣠⣤⣤⣤⣬⣿⣷⣄⡀
    ⠀⢀⣀⣸⡿⠀ ⠀⣼⡟⠁⠀⠀ ⠀⠀⠀⠙⣷
    ⢸⡟⠉⣽⡇⠀ ⠀⣿⡇⠀⠀⠀ ⠀⠀⠀⢀⣿
    ⣾⠇⠀⣿⡇⠀ ⠀⠘⠿⢶⣶⣤⣤⣶⡶⣿⠋
    ⣿⠂⠀⣿⡇⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠃
    ⣿⡆⠀⣿⡇⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀
    ⢿⡇⠀⣿⡇⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠀
    ⠘⠻⠷⢿⡇⠀⠀⠀⣴⣶⣶⠶⠖⠀⢸⡟⠀
    ⠀⠀⠀⢸⣇⠀⠀ ⠀⣿⡇⣿⡄⠀⢀⣿⠇⠀
    ⠀⠀⠀⠘⣿⣤⣤⣴⡿⠃⠙⠛⠛⠛⠋⠀
    `);

const express  = require('express');
const path     = require('path');
const bcrypt   = require('bcrypt');
const session  = require('express-session');
const { pool } = require('./dbConfig');
const app  = express();
const PORT = process.env.PORT || 3000;

// ─────────────────────────────────────────────
//  Middlewares  (configuración de Express para manejar archivos estáticos, formularios y sesiones)
// ─────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));   // lee los datos del formulario
app.use(express.json());

app.use(session({
    secret: 'novahardware_secret',
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ─────────────────────────────────────────────
//  Middleware para proteger rutas privadas (checa si el usuario está logueado si no lo redirige al login)
// ─────────────────────────────────────────────
function requireLogin(req, res, next) {
    if (req.session.usuario) {
        next();
    } else {
        res.redirect('/users/login');
    }
}

// ─────────────────────────────────────────────
//  Rutas públicas o sea que todo mundo puede ver sin iniciar sesion
// ─────────────────────────────────────────────
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users/registro', (req, res) => {
    res.render('registro');
});

app.get('/users/login', (req, res) => {
    res.render('indexLogin');
});

app.get('/users/configuracion', (req, res) => {
    res.render('configuracion');
});

// ─────────────────────────────────────────────
//  Registro de usuario uwuw
// ─────────────────────────────────────────────
app.post('/users/registro', async (req, res) => {
    const { nombre, correo, contrasena, contrasena2 } = req.body;
    const errors = [];

    if (!nombre || !correo || !contrasena || !contrasena2) {
        errors.push('Por favor, complete todos los campos');
    }
    if (contrasena !== contrasena2) {
        errors.push('Las contraseñas no coinciden');
    }
    if (contrasena && contrasena.length < 6) {
        errors.push('La contraseña debe tener al menos 6 caracteres');
    }

    if (errors.length > 0) {
        return res.render('registro', { errors });
    }

    try {
        const existe = await pool.query(
            'SELECT * FROM users WHERE correo = $1', [correo]
        );

        if (existe.rows.length > 0) {
            errors.push('Ese correo ya está registrado');
            return res.render('registro', { errors });
        }

        const hash = await bcrypt.hash(contrasena, 10);

        await pool.query(
            'INSERT INTO users (nombre, correo, password_hash) VALUES ($1, $2, $3)',
            [nombre, correo, hash]
        );

        console.log(`Usuario registrado: ${correo}`);
        res.redirect('/users/login');

    } catch (err) {
        console.error('Error al registrar:', err);
        errors.push('Error en el servidor, intenta de nuevo');
        return res.render('registro', { errors });
    }
});

// ─────────────────────────────────────────────
//  Login de usuario uwuw
// ─────────────────────────────────────────────
app.post('/users/login', async (req, res) => {
    const { correo, contrasena } = req.body;
    const errors = [];

    if (!correo || !contrasena) {
        errors.push('Por favor, complete todos los campos');
        return res.render('indexLogin', { errors });
    }

    try {
        const resultado = await pool.query(
            'SELECT * FROM users WHERE correo = $1', [correo]
        );

        if (resultado.rows.length === 0) {
            errors.push('Correo o contraseña incorrectos');
            return res.render('indexLogin', { errors });
        }

        const usuario = resultado.rows[0];
        const passwordValida = await bcrypt.compare(contrasena, usuario.password_hash);

        if (!passwordValida) {
            errors.push('Correo o contraseña incorrectos');
            return res.render('indexLogin', { errors });
        }

        req.session.usuario = {
            id:     usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo
        };

        console.log(`Login exitoso: ${usuario.correo}`);
        res.redirect('/users/dashboard');

    } catch (err) {
        console.error('Error en login:', err);
        errors.push('Error en el servidor, intenta de nuevo');
        return res.render('indexLogin', { errors });
    }
});

// ─────────────────────────────────────────────
//  Rutas privadas (requieren iniciar sesion esta en fase de prueba el gringo se equivoca mucho) jeje
// ─────────────────────────────────────────────
app.get('/users/dashboard', requireLogin, (req, res) => {
    res.render('dashboard', { usuario: req.session.usuario });
});

app.get('/users/configuracion', requireLogin, (req, res) => {
    res.render('configuracion', { usuario: req.session.usuario });
});

app.get('/users/reportes', requireLogin, (req, res) => {
    res.render('reportes', { usuario: req.session.usuario });
});
app.get('/users/usuarios', requireLogin, (req, res) => {
    res.render('usuarios', { usuario: req.session.usuario });
});

app.get('/users/ventas', requireLogin, (req, res) => {
    res.render('ventas', { usuario: req.session.usuario });
});
app.get('/users/pedidos', requireLogin, (req, res) => {
    res.render('pedidos', { usuario: req.session.usuario });
});

app.get('/users/inventario', requireLogin, (req, res) => {
    res.render('inventario', { usuario: req.session.usuario });
});

app.get('/users/index', requireLogin, (req, res) => {
    res.render('index', { usuario: req.session.usuario });
});

app.get('/users/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/users/login');
});

// ─────────────────────────────────────────────
//  Inicio del server 
// ─────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});