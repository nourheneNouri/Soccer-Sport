const mongoose = require('mongoose');
// define model attributes
//le model qui assure la communication entre le app.js et la base de donnee mongos
const matchSchema = mongoose.Schema({
    teamOne: String ,
    scoreOne : String,
    teamTwo : String,
    scoreTwo : String ,
    image : String //attribute for image
});
// 'Match' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "matches" 
//qui correspont a notre schéma matchschema
const match = mongoose.model('Match',matchSchema);
// import match 
module.exports = match ;