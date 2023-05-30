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

const follow = (req, res, next) => {
  Controller.follow(req.user.id, req.params.id)
    .then((data) => response.success(res, data, 201))
    .catch(next);
};

const following = (req, res, next) => {
  return Controller.following(req.params.id)
    .then((data) => {
      return response.success(res, data, 200);
    })
    .catch(next);
};

// Routes
router.get("/", list);
router.post("/follow/:id", secure("follow"), follow);
router.get("/:id/following", following);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

module.exports = router;
