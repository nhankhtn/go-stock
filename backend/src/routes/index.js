const stockRouter = require("./stock");

function route(app) {
    app.use("/api", stockRouter);
}
module.exports = route;
