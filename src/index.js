import { config } from 'dotenv';
config()
import express from 'express';
import router from './routes/index.js';
const app = express();
const PORT = 3000;
app.use(router)

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
