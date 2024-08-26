const express = require("express");
const router = express.Router();
const stock = require("../controllers/StockController")

router.get('/stock/realtime', stock.getDataRealtime)
router.get('/stock/history', stock.getDataHistory)
router.post('/stock', stock.create);
router.put('/stock/:id', stock.editData)
router.delete('/stock/:id', stock.delete);

module.exports = router;