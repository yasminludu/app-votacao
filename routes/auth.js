const express = require('express');
const Usuario = require('../models/Usuario');

const router = express.Router();

// Cadastro de usuário
router.post('/cadastrar', async (req, res) => {
    const { nomeCompleto, dataNascimento, cpf, usuario, senha } = req.body;

    if (!nomeCompleto || !dataNascimento || !cpf || !usuario || !senha) {
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    try {
        const novoUsuario = new Usuario({ nomeCompleto, dataNascimento, cpf, usuario, senha });
        await novoUsuario.save();
        res.json({ message: "Usuário cadastrado com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: "Erro ao cadastrar usuário" });
    }
});

module.exports = router;
