import { config } from 'dotenv';
config()
import { executeStudentCrudOperations } from './bd/index.js';
executeStudentCrudOperations();
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
  });

  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
