const express = require("express");
const cors = require("cors");
const config = require("config");
const chalk = require("chalk");
const pack = require("../package");

const app = express();
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

require("./routes")(app);

// mode can be access anywhre in the project
mode = process.env.NODE_ENV;

const server = app.listen(config.get(`${mode}.port`), () => {
  console.log(chalk.yellow(".......................................")); //eslint-disable-line
  console.log(chalk.green(`Project:\t${pack.name}`)); //eslint-disable-line
  console.log(chalk.blue("Port:\t\t" + server.address().port)); //eslint-disable-line
  console.log(chalk.red(`Mode:\t\t${config.get(`${mode}.mode`)}`)); //eslint-disable-line
  console.log(chalk.magenta(`App version:\t${pack.version}`)); //eslint-disable-line
  console.log(
    chalk.black.bgWhite(
      `browser:\thttp://localhost:${config.get(`${mode}.port`)}`
    )
  ); //eslint-disable-line
  console.log(chalk.yellow(".......................................")); //eslint-disable-line
});
