const mongoose = require('mongoose');
// define model attributes
//le model qui assure la communication entre le app.js et la base de donnee mongos
const userSchema = mongoose.Schema({
    
   firstName: String,
    lastName: String,
     email: String, 
     tel: String, 
     adresse: String,
     pwd:String 


});
// 'login' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "login" 
//qui correspont a notre schéma loginschema
const user = mongoose.model('User', userSchema);
// import login 
module.exports = user ;