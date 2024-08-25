const axios = require('axios');
const kafka = require('../config/kafka');

async function fetchStockData() {
    try {
        const response = await axios.post(process.env.API_REALTIME, {
            TotalTradeRealRequest: { account: 'StockTraders' }
        });

        if (response.data) {
            const stocks = response.data.TotalTradeRealReply.stockTotalReals;
            stocks.forEach(stock => {
                kafka.sendMessage(stock);
            });
        }
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

setInterval(fetchStockData, 5000);

module.exports = fetchStockData;
