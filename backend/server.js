const app = require('./app');   /* import the express application */

/*port and host(name or ip)*/
const server = app.listen(5000, '127.0.0.1', () => {                 /* create a server using express application, listen to port 5000 (our express application) */
    console.log(`node server is listening to ${server.address().port}`);   /* to get the address and port of the server */
});