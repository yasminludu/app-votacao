const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Conectar ao MongoDB (substitua pela URL do seu banco se for na nuvem)
mongoose.connect('mongodb+srv://yasminluduvice:<db_Oliveira279*>@cluster0.yn2ew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Conectado ao MongoDB Atlas'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const votacaoRoutes = require('./routes/votacao');

app.use('/api/auth', authRoutes);
app.use('/api/votacao', votacaoRoutes);

// Servir arquivos estáticos do frontend
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = { app, io };




