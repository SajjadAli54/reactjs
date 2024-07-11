const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (data) => {
        console.log(`Received message: ${data}`);

        // Broadcast the message to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(data);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
