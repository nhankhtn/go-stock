const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/go-stock");

        console.log("Connect database successfully!!!");
    } catch (error) {
        console.log("Connect database failure!!!");
    }
}




module.exports = { connect };