const express = require("express"); /* call to the express module */
const app = express(); /* create an express app (express instance) */
const cors = require("cors");
const users = require("./model").default;
const controller = require("./controller"); /* import controller.js file */

/* middleware part */
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  }) /* to encode any type of data */
);

app.use(express.json()); /* to accept json data , convert data to json format*/

/* create rest api routes part (using express)*/
app.get("/users", (req, res) => {
  /*url, request and response */
  controller.getUsers((req, res, next) => {
    /* call the controller function */
    res.send(); /* send the response to client */
  });
});

app.post("/createuser", (req, res) => {
  /*url, request and response */
  controller.addUser(req.body, (callback) => {
    /* call the controller function */
    res.send(); /* send the response to client */
  });
});

app.post("/updateuser", (req, res) => {
  /*url, request and response */
  controller.updateUser(req.body, (callback) => {
    /* call the controller function */
    res.send(
      callback
    ); /* paa call back because i need to know which data was updated */
  });
});

app.post("/deleteuser", (req, res) => {
  /*url, request and response */
  controller.deleteUser(req.body, (callback) => {
    /* call the controller function */
    res.send(
      callback
    ); /* paa call back because i need to know which data was updated */
  });
});
/* this will show user by id: http://localhost:5000/user?id=2 */


/*export to access from server.js*/
/* now this is express application */
module.exports = app;
