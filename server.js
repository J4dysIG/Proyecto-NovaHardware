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

const {Client} = require('pg');
const express = require('express');
const app = express();
const { pool } = require('./dbConfig');
const path = require('path');
const PORT = process.env.PORT || 4000;

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs'); // Configura EJS como el motor de plantillas
app.use(express.urlencoded({ extended: false })); // Middleware para parsear el cuerpo de las solicitudes
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index'); //para renderizar el archivo Index.ejs
});

app.get('/users/registro', (req, res) => {
    res.render('registro'); //para renderizar el archivo registro.ejs
});

app.get('/users/login', (req, res) => {
    res.render('indexLogin'); //para renderizar el archivo indexLogin.ejs
});

app.get('/users/dashboard', (req, res) => {
    res.render('dashboard'); //para renderizar el archivo dashboard.ejs
});

app.post('/users/registro', async (req, res) => {
   let { nombre, correo, password_hash } = req.body;
   console.log(`Datos recibidos: Name=${nombre}, Email=${correo}, Password=${password_hash}`);

   let errors = [];

   if (!nombre || !correo || !password_hash || !password_hash2 ) {
       errors.push('Por favor, complete todos los campos');
   }

   if (password_hash !== password_hash2) {
       errors.push('Las contraseñas no coinciden');

    if (password_hash.length < 15) {
        errors.push('La contraseña debe tener al menos 15 caracteres');
    }
    
   }

   if (errors.length > 0) {
       return res.render('registro', { errors });
   }
});
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

const con= new Client({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'Nova_Hardware_DB',
    port: 5433
});

con.connect().then(()=> console.log('Conexión exitosa a la base de datos'))
.catch(err => console.error('Error al conectar a la base de datos', err));

con.query('SELECT * FROM users')
.then(res => console.log('Resultados de la consulta:', res.rows))
.catch(err => console.error('Error al ejecutar la consulta', err))
.finally(() => con.end());