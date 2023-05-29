const db = {
  user: [{ id: 1, name: "Dave" }],
};

const list = async (table) => {
  return db[table] || [];
};
const get = async (table, id) => {
  const col = await list(table);
  return col.find((item) => item.id === parseInt(id)) || null;
};
const upsert = async (table, data) => {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
};
const remove = async (table, id) => {
  return true;
};

const query = async (table, q) => {
  const col = await list(table);
  const keys = Object.keys(q);
  return col.find((item) => item[keys[0]] === q[keys[0]]) || null;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
