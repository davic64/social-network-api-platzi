const fetch = require("node-fetch");

class RemoteDB {
  constructor(host, port) {
    this.URL = `http://${host}:${port}`;
  }

  async req(method, table, data) {
    const url = `${this.URL}/${table}`;

    console.log(url);

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await res.json();
    } catch (err) {
      console.error("DB Remote Error: ", err);
      return err.message;
    }
  }

  list(table) {
    console.log(table);

    return this.req("GET", table);
  }

  get(table, id) {
    console.log(table);
    return this.req("GET", `${table}/${id}`);
  }

  upsert(table, data) {}

  query(table, query, join) {}
}

module.exports = RemoteDB;
