require('dotenv').config();
// ── Configuración de la base de datos (no we no es ia asi me lo da el vs code) jeje───────────────────────────────────────────────────────────────

const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
});

module.exports = { pool };