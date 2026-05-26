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