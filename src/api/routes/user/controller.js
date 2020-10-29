const UserService = require("../../../service/user/index");
const UserServiceInstance = new UserService();
const { validationResult } = require("express-validator");

module.exports = {
  createUser: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors);
    }
    let data = req.body;
    let param = req.params;
    let query = req.query;
    try {
      let result = await UserServiceInstance.Signup(data);
      res.status(201).send({ result, test: "test" });
    } catch (error) {
      console.error(error);
    }
  },
};
