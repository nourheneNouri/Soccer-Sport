const mongoose = require('mongoose');
// define model attributes
//le model qui assure la communication entre le app.js et la base de donnee mongos
const stadiumSchema = mongoose.Schema({
    name: String,
    country: String,
    capacity: String
  
 
});
// 'player' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "playeres" 
//qui correspont a notre schéma playerSchema
const stadium = mongoose.model('Stadium',stadiumSchema);
// import player 
module.exports = stadium ;