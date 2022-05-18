const dotenv = require("dotenv")
dotenv.config({ path: './public/config/config.env'})

// Connection URL
const url = process.env.MONGO_URI;
// Database Name
const dbName =  process.env.MONGO_DB_NAME;

const MongoClient = require( 'mongodb' ).MongoClient;
var _db;
const connectDB = async (callback) => {
    try {
        MongoClient.connect(url, (err, db) => {
            _db = db
            return callback(err)
        })
    } catch (e) {
        throw e
    }
}

const getDB = () => _db

const disconnectDB = () => _db.close()

module.exports = { connectDB, getDB, disconnectDB }

// var MongoDB = require( './public/js/db');
// MongoDB.connectDB(async (err) => {
//     if (err) throw err;
//     // Load db & collections
//     var db = MongoDB.getDB();
//     db = db.db(dbName);
//     //Write your db action here

//     MongoDB.disconnectDB();
// });



//############################### Print DB as JSON ##########################
// const getCircularReplacer = () => {
//     const seen = new WeakSet();
//     return (key, value) => {
//       if (typeof value === 'object' && value !== null) {
//         if (seen.has(value)) {
//           return;
//         }
//         seen.add(value);
//       }
//       return value;
//     };
//   };
  
//   database.name = database;
  
 
//   const result = JSON.stringify(database, getCircularReplacer());
//   console.log(result);