const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/api');

const db = require('./db');

// inicializa o express
const app = express();

// define a porta
const port = process.env.PORT || 5000;
// Armazena o valor de DB_HOST como uma variável
const DB_HOST = process.env.DB_HOST || "mongodb://localhost:27017/bakery";
// Conecta ao BD
db.connect(DB_HOST);

// *** MIDDLEWARE
app.use(bodyParser.json());
app.use('/api', routes);
app.use(function (err, req, res, next) {
  console.log(err);
  // ‘res.status(422)’->muda o status
  res.status(422).send({ error: err.message });
});
// ***

// servidor iá escutar na porta 5000
app.listen(port, () => {
  console.log("Servidor em execução na porta: " + port);
});

app.get('/', function (req, res) {
  // res.send("End Point Inválido");
  res.redirect(301, "https://amignon.gitbook.io/bakery-api/");
});








