const LocalStrategy = require('passport-local').Strategy
const dotenv = require('dotenv')
dotenv.config({ path: './public/config/config.env'})
var dbName =  process.env.MONGO_DB_NAME;
var MongoDB = require( './db');
function initialize(passport) {
    console.log("Here 1")

  const authenticateUser = async (username, password, done) => {
    console.log("Here 1.5" + username)
    MongoDB.connectDB(async (err) => {
        if (err) throw err;
        // Load db & collections
        var db = MongoDB.getDB();
        db = db.db(dbName);
        var isUser = await db.collection("users").findOne({ username : username })
        console.log("%%%%%%%%%%" + JSON.stringify(isUser))
        if(isUser){
            var isPassword = isUser.password;
            var isUserId = isUser.id;
        }
        console.log("$$$$$$$$$$$$$$$$" +  JSON.stringify(isUser))
        MongoDB.disconnectDB();
        return isUser;
    });
    console.log("Here 2")
    if(isUser == null) {
        console.log("Here 3")
      return done(null, false, { message: 'No user with that username' })
    }

    try {
      if (isUser.password == password) {
        console.log("Here 6")
        return done(null, isUser)
      } else {
        console.log("Here 7")
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }   

  
  console.log("Here 8")
  passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser))
  passport.serializeUser((isUser, done) => done(null, isUser.id))
  passport.deserializeUser((id,done) => {
    return done(null, isUser.username)
  })
}

module.exports = initialize