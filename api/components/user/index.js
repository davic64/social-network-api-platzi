// const store = require("../../../store/mysql");
const store = require("../../../store/remoteMySQL");
const ctrl = require("./controller");

module.exports = ctrl(store);
