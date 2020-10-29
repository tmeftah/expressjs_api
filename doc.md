# Structure

## Folder structure

    |_  src
        |_  server.js               # App entry point
        |_  routes.js               # App routes
        |_  api                     # Router/controller/validator for endpoints
        |   |_  controllers
        |   |_  validator
        |   |_  routes
        |_  services                # Business logic
        |_  models                  # Data Access / Database models

# Server.js

When calling this file it starts a server listing on port 4000. Routers are imported throught the routes.js file which imports all routes from the "/api/routes" folder.

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

require("./routes")(app);

// mode can be access anywhre in the project
mode = process.env.NODE_ENV;

const server = app.listen(4000, () => {
  console.log("server  is running"); //eslint-disable-line
});
```

# Routes.js

This file import dynamiclly all routes files from "/api/routes" folder that ends with Route.js. In that way there is no need to import them manually each time we create a new route.

```javascript
const glob = require("glob"); // eslint-disable-line import/no-unresolved

module.exports = (app) => {
  glob(`${__dirname}/api/routes/**/**Route.js`, {}, (er, files) => {
    if (er) throw er;
    files.forEach((file) => require(file)(app));
  });
};
```

# \*\*Route.js

this file is only responsible of the definiton of the route. Validation and controller are passed to the route function.

```javascript
const express = require("express");
const route = express.Router();
const Controller = require("./controller");
const Validator = require("./validator");

module.exports = (app) => {
  route.route("/").get(Validator.create(), Controller.createUser);
  app.use("user", route);
};
```

# Controller.js

This file is responsible for performing the business logic.

```javascript
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
```
