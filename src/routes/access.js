const express = require('express');
const router = express.Router();

// Rota para simular solicitação de acesso

router.get('/status', (req, res) => {
    res.json({ status: 'ok' });
});


router.post('/', (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ error: 'userId é obrigatório' });
    }

    // Aqui você pode adicionar lógica de validação, salvar em banco, etc.
    return res.status(200).json({ message: 'Acesso concedido', userId });
});

module.exports = router;
