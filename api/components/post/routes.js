const express = require("express");
const secure = require("./secure");

const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

const list = (req, res, next) => {
  Controller.list()
    .then((data) => {
      response.success(res, data, 200);
    })
    .catch(next);
};

const get = (req, res, next) => {
  Controller.get(req.params.id)
    .then((post) => {
      response.success(res, post[0], 200);
    })
    .catch(next);
};

const upsert = (req, res, next) => {
  Controller.upsert(req.body, req.user.id)
    .then((post) => {
      response.success(res, post, 201);
    })
    .catch(next);
};

// Routes
router.get("/", list);
router.get("/:id", get);
router.post("/", secure("own"), upsert);

module.exports = router;
