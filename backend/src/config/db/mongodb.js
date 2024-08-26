const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(process.env.URL_DATABASE);
        console.log("Connect database successfully!!!");
    } catch (error) {
        console.log("Connect database failure!!!");
    }
}




module.exports = { connect };