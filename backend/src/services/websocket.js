const WebSocket = require('ws');
const Stock = require('../models/Stock');

const setupWebSocket = (server) => {
    const wss = new WebSocket.Server({ noServer: true });

    wss.on('connection', (ws, req) => {
        ws.on('message', async message => {
            try {
                const data = JSON.parse(message);
                const stocks = await Stock.find(data);
                ws.send(JSON.stringify(stocks));
            } catch (error) {
                console.error('Error handling WebSocket message:', error);
            }
        });
    });

    server.on('upgrade', (req, socket, head) => {
        wss.handleUpgrade(req, socket, head, (ws) => {
            wss.emit('connection', ws, req);
        });
    });

    return wss;
};

module.exports = setupWebSocket;