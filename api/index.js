const express = require("express");
const config = require("../config");
const user = require("./components/user/routes");
const auth = require("./components/auth/routes");
const post = require("./components/post/routes");
const errors = require("../network/errors");

const app = express();
app.use(express.json());

// ROUTES
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/post", post);

app.use(errors);

app.listen(config.api.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.api.port}`);
});
