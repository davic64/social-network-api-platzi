const { Router } = require("express");

const response = require("../network/response");
const Store = require("../store/mysql");

const router = Router();

const list = async (req, res, next) => {
  const data = await Store.list(req.params.table);
  response.success(res, data, 200);
};

const get = async (req, res, next) => {
  const data = await Store.get(req.params.table, req.params.id);
  response.success(res, data, 200);
};
const upsert = async (req, res, next) => {
  const data = await Store.upsert(req.params.table, req.body);
  response.success(res, data, 201);
};

router.get("/:table", list);
router.get("/:table/:id", get);
router.post("/:table", upsert);
router.put("/:table", upsert);

module.exports = router;
