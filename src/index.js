import { config } from 'dotenv';
config()
import express from 'express';
import router from './routes/index.js';
import body_parser from 'body-parser';

const app = express();
const PORT = 3000;
const jsonParser = body_parser.json()
// var urlencodedParser = body_parser.urlencoded({ extended: false })
app.use(jsonParser)
app.use(body_parser.urlencoded({extended:true}));
app.use(router);

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
