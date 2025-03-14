const express = require('express');
const Votacao = require('../models/Votacao');
const { io } = require('../server'); // Importa o Socket.io

const router = express.Router();

// Registrar voto
router.post('/votar', async (req, res) => {
    const { usuario, voto } = req.body;

    if (!usuario || !voto) {
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    try {
        const novoVoto = new Votacao({ usuario, voto });
        await novoVoto.save();

        // Enviar atualização em tempo real para o telão
        io.emit('atualizarVotos');

        res.json({ message: "Voto registrado com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: "Erro ao registrar voto" });
    }
});

module.exports = router;
