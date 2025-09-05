const express = require('express');    /* call to the express module */
const app = express();                     /* create an express app (express instance) */
const cors = require('cors');

/* middleware */
app.use(cors());

app.use(
    express.urlencoded({ 
        extended: true 
    })   /* to encode any type of data */
);

app.use(express.json());   /* to accept json data , convert data to json format*/

/*export to access from server.js*/
/* now this is express application */
module.exports = app;