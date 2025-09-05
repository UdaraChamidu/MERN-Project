const e = require("express");

const users = [
    { id: 1, name: 'Udara' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Jane' }
];


/* controller function to return the data*/

const getUsers = (cb) => {      /* cb = call back function*/
    cb(users);          /* returnig with the dataset*/
};

const getUserById = (id, cb) => {
    const user = users.find(user => user.id == id);  /* find user by id*/
    cb(user);           /* returnig with the dataset*/
};

exports.getUsers = getUsers;   /* export the function to access from other files*/
exports.getUserById = getUserById;

