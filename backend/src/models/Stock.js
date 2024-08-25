const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    ticker: String,
    date: Date,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    vol: Number
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
