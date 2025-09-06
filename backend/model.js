const mongoose = require('mongoose');  /* import mongoose module */
const Schema = mongoose.Schema;   /* create a schema variable , use to create a model*/

const userSchema = new Schema({   /* create a schema for user */
    id: Number,
    name: String
});  /* this is the created model*/


/* export the model for a user */
/* user schema is for a user now */ 
const User = mongoose.model('User', userSchema);  /* create a model using the schema */

module.exports = User;   /* export the model to use in other files */

/* now this is a mongoose model */
/* we can use this model in controller.js file */   
/* we can create users using this model */
/* if we entered wrong type information or wrong data types, those are validated by the model */