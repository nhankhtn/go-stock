require("dotenv").config();
const express = require('express');
const path = require("path");
const http = require("http");
const { mongodb } = require("./config/db");
const kafka = require("./config/kafka");
const fetchStockData = require("./services/fetchStockData");
const router = require("./routes");
const setupWebSocket = require("./services/websocket");

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Connect database 
mongodb.connect();
// Create producer kafka
kafka.runProducer();
// Create consumer kafka
kafka.runConsumer();
// Get data realtime from API 
fetchStockData();

router(app);
setupWebSocket(server);

// Basis UI to test 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/test/index.html");
});

const port = process.env.PORT || 8000;
server.listen(port, async () => {
    console.log('Server running on port 3000');
});
