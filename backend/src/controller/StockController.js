const Stock = require('../models/Stock');

class StockController {
    async getDataRealtime(req, res) {
        const stocks = await Stock.find({ date: new Date() });
        res.json(stocks);
    }
    async getDataHistory(req, res) {
        const { ticker } = req.query;
        const stocks = await Stock.find({ ticker });
        res.json(stocks);
    }
    async create(req, res) {
        const stock = new Stock(req.body);
        await stock.save();
        res.status(201).json(stock);
    }
    async editData(req, res) {
        const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(stock);
    }
    async delete(req, res) {
        await Stock.findByIdAndDelete(req.params.id);
        res.status(204).end();
    }
}

module.exports = new StockController();