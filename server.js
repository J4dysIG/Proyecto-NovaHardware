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
const path = require('path');
const PORT = process.env.PORT || 4000;

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs'); // Configura EJS como el motor de plantillas
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.render('index'); //para renderizar el archivo Index.ejs
});

app.get('/users/registro', (req, res) => {
    res.render('registro'); //para renderizar el archivo registro.ejs
});

app.get('/users/login', (req, res) => {
    res.render('indexLogin'); //para renderizar el archivo indexLogin.ejs
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