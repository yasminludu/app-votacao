const mongoose = require('mongoose');

const VotacaoSchema = new mongoose.Schema({
    usuario: String,
    voto: String,
    data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Votacao', VotacaoSchema);
