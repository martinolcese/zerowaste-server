const mongoose = require('mongoose');

module.exports = {
  connect: DB_HOST => {
    // Conecta ao BD
    mongoose.connect(DB_HOST);
    // Log se conectou com sucesso
    mongoose.connection.on('connected', _ => {
      console.log('Conectado ao Banco de Dados');
    });

    // Log se ocorrer algum erro de conexão
    mongoose.connection.on('error', err => {
      console.error(err);
      console.log(
        'MongoDB erro de conexão.'
      );
      process.exit();
    });
  },

  close: () => {
    mongoose.connection.close();
  }
};