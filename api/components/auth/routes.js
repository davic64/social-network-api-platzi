const { Router } = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = Router();

router.post("/login", function (req, res, next) {
  Controller.login(req.body.username, req.body.password)
    .then((token) => {
      response.success(res, token, 200);
    })
    .catch(next);
});

module.exports = router;
