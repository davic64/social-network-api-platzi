const express = require("express");
const config = require("../config");
const router = require("./routes");

const app = express();
app.use(express.json());

// ROUTES
app.use("/", router);

app.listen(config.mysqlService.port, () => {
  console.log(
    `🚀 MySQL Server running on http://${config.mysqlService.host}:${config.mysqlService.port}`
  );
});
