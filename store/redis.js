const redis = require("redis");
const config = require("../config");

const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
});

const list = (table) => {
  return new Promise((resolve, reject) => {
    client.get(table, (err, data) => {
      if (err) return reject(err);

      let res = data || null;
      if (data) {
        res = JSON.parse(data);
      }
      resolve(res);
    });
  });
};

const get = (table, id) => {
  // TODO
};

const upsert = async (table, data) => {
  let key = table;
  if (data && data.id) {
    key = key + "_" + data.id;
  }

  client.setEx(key, 10, JSON.stringify(data));
  return true;
};

module.exports = {
  list,
  get,
  upsert,
};
