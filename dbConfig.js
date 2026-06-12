require('dotenv').config();
console.log('DATABASE_URL length:', process.env.DATABASE_URL?.length);
console.log('Empieza con postgresql:', process.env.DATABASE_URL?.startsWith('postgresql://'));
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

module.exports = { pool };