import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares de seguridad y formato
app.use(cors()); // Permite que tu frontend se comunique con este backend
app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

// Ruta de prueba (Endpoint) para validar la conexión a PostgreSQL
app.get('/api/test-db', async (req, res) => {
  try {
    // Intentamos hacer un simple "SELECT NOW()" a la base de datos
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      mensaje: 'Conexión a PostgreSQL exitosa, Ernest.', 
      horaServidor: result.rows[0].now 
    });
  } catch (error) {
    console.error('Error crítico conectando a la base de datos:', error);
    res.status(500).json({ error: 'Fallo en la conexión a la base de datos' });
  }
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor de NovaHardware corriendo en el puerto ${port}`);
});