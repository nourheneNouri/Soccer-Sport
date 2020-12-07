const mongoose = require('mongoose');
// define model attributes
//le model qui assure la communication entre le app.js et la base de donnee mongos
const playerSchema = mongoose.Schema({
    name: String ,
    date : String,
    image : String
  
 
});
// 'player' c'est le nom du model dans la DB qui creé automatiquement une collection nommée "playeres" 
//qui correspont a notre schéma playerSchema
const player = mongoose.model('Player',playerSchema);
// import player 
module.exports = player ;