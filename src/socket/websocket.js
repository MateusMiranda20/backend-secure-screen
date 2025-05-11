let accessGranted = false;

function setupSocket(io) {
    io.on('connection', (socket) => {
        console.log('Usuário conectado:', socket.id);

        // Solicitação de acesso
        socket.on('request_access', () => {
            if (!accessGranted) {
                accessGranted = true;
                socket.emit('access_granted');
                socket.broadcast.emit('access_locked');
                console.log('Acesso concedido ao socket:', socket.id);
            } else {
                socket.emit('access_denied');
                console.log('Acesso negado ao socket:', socket.id);
            }
        });

        // Liberação de acesso
        socket.on('release_access', () => {
            accessGranted = false;
            io.emit('access_unlocked');
            console.log('Acesso liberado pelo socket:', socket.id);
        });

        socket.on('disconnect', () => {
            console.log('Desconectado:', socket.id);
        });
    });
}

module.exports = setupSocket;
