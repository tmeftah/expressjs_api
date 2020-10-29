const express = require("express");
const route = express.Router();
const Controller = require("./controller");
const Validator = require("./validator");
const RouteConstant = require("../../../constant/Routes");

module.exports = (app) => {
  route.route("/").get(Validator.create(), Controller.createUser);

  route.post("/", (req, res) => {
    res.send({
      "req:": req.body,
      msg: req.method,
    });
  });

  app.use(RouteConstant.USER, route);
};
