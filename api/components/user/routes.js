const { Router } = require("express");

const secure = require("./secure");
const response = require("../../../network/response");
const Controller = require("./index");

const router = Router();

// Internal functions
const list = (_, res, next) => {
  Controller.list()
    .then((list) => {
      response.success(res, list, 200);
    })
    .catch(next);
};

const get = (req, res, next) => {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(res, user, 200);
    })
    .catch(next);
};

const upsert = (req, res, next) => {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(res, user, 201);
    })
    .catch(next);
};

// Routes
router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

module.exports = router;
