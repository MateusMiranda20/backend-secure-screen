# 📦 Backend - Tela Segura

Este é o backend da aplicação **Tela Segura**, responsável por gerenciar a lógica de acesso exclusivo via **WebSocket**, permitindo que apenas um usuário por vez tenha acesso à tela.

---

## Tecnologias utilizadas

- Node.js
- Express
- Socket.io
- CORS

---

## Funcionalidades principais

- Permite que **apenas um usuário por vez acesse a tela**.
- Bloqueia novas conexões até que o usuário atual libere o acesso.
- Emite eventos WebSocket em tempo real para manter o estado sincronizado entre clientes.

---

## Estrutura de pastas

backend-secure-screen/

|--- src/
| |--- index.js
| |--- websocket.js
|
|--- package.json
|
|--- README.md

---

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/backend-secure-screen.git

cd backend-secure-screen

2. Instale as dependências

npm install

3. Inicie o servidor

yarn dev

---

 ##Eventos WebSocket

| Evento            | Emitido por | Ação                                                           |
| ----------------- | ----------- | -------------------------------------------------------------- |
| `request_access`  | Front-end   | Solicita acesso exclusivo à tela                               |
| `access_granted`  | Back-end    | Permite acesso ao primeiro cliente                             |
| `access_denied`   | Back-end    | Bloqueia tentativa de acesso quando já existe um cliente ativo |
| `access_locked`   | Back-end    | Notifica os outros clientes de que o acesso está bloqueado     |
| `release_access`  | Front-end   | Libera a tela                                                  |
| `access_unlocked` | Back-end    | Informa que a tela está liberada para um novo cliente          |
