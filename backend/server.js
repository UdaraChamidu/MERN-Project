const express = require('express');    /* call to the express module */
const app = express();                     /* create an express app (express instance) */
const cors = require('cors');
const router = require('./router');  /* import router.js file */

const mongoose = require('mongoose');   /* import mongoose to connect to mongodb database */

/* add some needed overwriteMiddlewareResult..*/
app.use(cors());
app.use(express.json());   /* to accept json data , convert data to json format*/

/* mongodb uri*/
const uri = "mongodb+srv://udaramongo:udarahava@cluster0.chkniz8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

/* to connect the link, create connect function*/
/* inside async functions, we can try and try one api connect */
/* other functions will not do that thing */
const connect = async () => {
    try {
        await mongoose.connect(uri);   /* wait until the connection is done */
        console.log("connected to mongodb database");
    } catch (error) {
        console.log("error while connecting to mongodb database: ", error);
    }
};
connect();   /* call the connect function to connect to mongodb database */

/*port and host(name or ip)*/
const server = app.listen(5000, 'localhost', () => {                 /* create a server using express application, listen to port 5000 (our express application) */
    console.log(`node server is listening to ${server.address().port}`);   /* to get the address and port of the server */
});
/* use like this in the postman:  127.0.0.1:5000/api/users */

/* as a middleware, use the router */
app.use('/api', router);  /* use the router for all the routes starting with /api */
/* because of /api, we can identify it is for api calling or something */
