const { body, check } = require("express-validator");

module.exports = {
  create: () => {
    return [
      check("email")
        .not()
        .isEmpty()
        .withMessage("username must be exist")
        .bail()
        .isEmail()
        .withMessage("username must be email")
        .bail(),
    ];
  },

  update: () => {
    return [
      check("name", "Name is Mandatory Parameter Missing.").not().isEmpty(),
    ];
  },
};
