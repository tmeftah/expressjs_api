# expressjs_api

expressjs api: Boilerplate/Generator/Starter Project for building RESTful APIs and microservices using Node.js, Express

## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

    $ git clone https://github.com/tmeftah/expressjs_api
    $ cd expressjs_api
    $ npm install

## Configure app

Open `/config/dev.json` for development (production.json or staging.json) then edit it with your settings. You will need to setup:

- port
- database
- email

## Running the project (development)

    $ npm run dev

## Running the project (production)

    $ npm run production
