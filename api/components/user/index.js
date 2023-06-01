const config = require("../../../config");

let store, cache;
if (config.remoteDB === true) {
  store = require("../../../store/remoteMySQL");
  csche = require("../../../store/remoteCache");
} else {
  store = require("../../../store/mysql");
  cache = require("../../../store/redis");
}
const ctrl = require("./controller");

module.exports = ctrl(store, cache);
