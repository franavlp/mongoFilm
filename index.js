const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
  });

  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
