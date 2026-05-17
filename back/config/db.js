import pg from 'pg';
import dotenv from 'dotenv';

// Instruimos a Node que lea el archivo .env y cargue las variables en memoria
dotenv.config();

const { Pool } = pg;

// Instanciamos el Pool utilizando las variables de entorno ocultas
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

export default pool;