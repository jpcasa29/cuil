let express = require('express');
let rutas = require('./routes/routes');
let app = express();

app.use('/', rutas);

app.use(function(req, res) {
    res.status(404).send('Disculpe, esa página no es posible encontrarla! Ingrese a localhost:3000/calcular-cuil');
  });

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
