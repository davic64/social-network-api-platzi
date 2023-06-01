const express = require("express");
const config = require("../config");
const router = require("./routes");

const app = express();
app.use(express.json());

// ROUTES
app.use("/", router);

app.listen(config.cacheService.port, () => {
  console.log(
    `🚀 MySQL Server running on http://${config.cacheService.host}:${config.cacheService.port}`
  );
});
