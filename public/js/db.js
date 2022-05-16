//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var mydb = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
mydb.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mydb;