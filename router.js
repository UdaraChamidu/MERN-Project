const express = require("express");
const router = express.Router();
const controller = require("./controller"); /* import controller.js file */

/* create rest api routes for 4 methods*/
router.get("/users",controller.getUsers); /* get all users (whatshould return: all users)*/
router.post("/createuser", controller.addUser);
router.post("/updateuser", controller.updataUser);
router.post("/deleteuser", controller.deleteUser);

module.exports = router;