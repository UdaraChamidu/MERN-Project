/* const e = require("express");

const users = [
    { id: 1, name: 'Udara' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Jane' }
];
 */
/* here data is imported. instead of doing above...*/
const users = require("./model"); /* import the dataset from model.js file*/

/* controller function to return the data*/

const getUsers = (req, res, next) => {
  /* next  for do the next thing*/
  users
    .find() /* select user from the database*/
    .then((response) => {
      res.json({ response }) /* return the response as json format*/;
    })
    .catch((error) => {
      res.json({
        error: error,
      });
    });
};
/* get data using a promis*/

const addUser = (req, res, next) => {
  const user = new users({
    id: req.body.id,
    name: req.body.name,
  });
  user
    .save()
    .then((response) => {
      res.json({ response }) /* return the response as json format*/;
    })
    .catch((error) => {
      res.json({
        error: error,
      });
    });
};

const updataUser = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  /* const {id, name} = req.body -> using object re structuring*/
  users
    .updateOne({ id: id }, { $set: { name: name } })
    .then((response) => {
      res.json({ response }) /* return the response as json format*/;
    })
    .catch((error) => {
      res.json({
        error: error,
      });
    });
};

const deleteUser = (req, res, next) => {
  const id = req.body.id;
  users
    .deleteOne({ id: id })
    .then((response) => {
      res.json({ response }) /* return the response as json format*/;
    })
    .catch((error) => {
      res.json({
        error: error,
      });
    });
};

exports.getUsers = getUsers; /* export the function to access from other files*/
exports.addUser = addUser;
exports.updataUser = updataUser;
exports.deleteUser = deleteUser;
/* now this is a controller */
