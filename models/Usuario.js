const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nomeCompleto: String,
    dataNascimento: String,
    cpf: String,
    usuario: String,
    senha: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
