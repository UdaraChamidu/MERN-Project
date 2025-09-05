
const express = require('express');    /* call to the express module */
const app = express();                     /* create an express app (express instance) */
const cors = require('cors');

const controller = require('./controller');  /* import controller.js file */


/* middleware */
app.use(cors());

app.use(
    express.urlencoded({ 
        extended: true 
    })   /* to encode any type of data */
);

app.use(express.json());   /* to accept json data , convert data to json format*/



/* create rest api routes */
app.get('/users', (req, res) => {   /*url, request and response */
    controller.getUsers((users) => {   /* call the controller function */
        res.send(users);   /* send the response to client */
    });
});
/* this will show all the users: http://localhost:5000/users */

app.get('/user', (req, res) => {   /*url, request and response */
    const id = req.query.id;   /* send the id from query parameter and get the user */
    controller.getUserById(id, (user) => {   /* call the controller function */
        res.send(user);   /* send the response to client */
    });
});
/* this will show user by id: http://localhost:5000/user?id=2 */




/*export to access from server.js*/
/* now this is express application */
module.exports = app;


