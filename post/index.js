const express = require("express");
const config = require("../config");
const post = require("./components/post/routes");
const errors = require("../network/errors");

const app = express();
app.use(express.json());

// ROUTES
app.use("/api/post", post);

app.use(errors);

app.listen(config.post.port, () => {
  console.log(`🚀 Post Server running on http://localhost:${config.post.port}`);
});
