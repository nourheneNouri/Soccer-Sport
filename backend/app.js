//Import express module 
const express = require('express');
// create backend application 
const app = express();
// declaration de body parser qui on insatllera traver npm i --save body--parse
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// il me donnee l accée pour manipuler des dossier dans le servers 
const path = require('path');
// pour uploder l'image 
const multer = require('multer');
//define image folder destination
app.use('/images', express.static(path.join('backend/images')))
//import match.js 
const Match = require('./models/match');
// import player de dossier js
const Player = require('./models/player');
// import User de dossier js
const User = require('./models/login');

// Import mongoose module
const mongoose = require('mongoose');
const user = require('./models/login');
const Stadium = require('./models/stdauim');

//Connect application to DB , else connect automatically
mongoose.connect('mongodb://localhost:27017/soccerDB',
  { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//define images to
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}

// storage défini l'emplacemnt et le nom du fichier
const storage = multer.diskStorage({
  // destination
  // cd callback retour du request 
  destination: (req, file, cb) => {
    // verify if image correspends to mime type 
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  //define file name 
  filename: (req, file, cb) => {
    // toLowerCase originalname to minuscule et changer tout espace par "-"
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});

app.get('/allMatches', (req, res) => {
  console.log('I am here allMatches');
  //connect to DB and get all Matches
  // find FN prédéfinie de recherche
  Match.find((err, docs) => {
    if (err) {
      console.log('Error', err)
    } else {

      res.status(200).json({
        message: 'here all objects',
        matches: docs
      });

    }
  }

  );

})
// traitement d'ajout 
app.post('/addMatch', multer({ storage: storage }).single('image'), (req, res) => {
  console.log('here in adding');
  // http :// localhost
  url = req.protocol + '://' + req.get('host');

  // create object to insert into db  
  // le modele qui assure la communication entre le app.js et la base de donnée mongo
  //body : teb3a front bech ta5edh les inputes eli el form 'html' 
  const match = new Match({
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    image: url + '/images/' + req.file.filename
  });
  // then: apres fini la traitment de db 
  match.save().then(
    result => {
      res.status(200).json({
        message: "added successfully"
      })
    }
  );
});
app.delete('/deleteMatch/:id', (req, res) => {
  // req.params.id affiche le id 
  console.log('here in delete', req.params.id);
  // {} c'est un objet json
  Match.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});

app.get('/displayMatch/:id', (req, res) => {
  console.log('here in get ', req.params.id);
  Match.findOne({ _id: req.params.id }).then(
    data => {
      res.status(200).json({
        match: data
      })
    }
  )
});
app.put('/editMatch/:id', (req, res) => {
  console.log('here in edit ', req.params.id);
  const match = new Match({
    _id: req.body._id,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo

  });
  // update takes 2 params : 1st for search and the 2end to replace it 
  Match.update({ _id: req.params.id }, match).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'updated Successfully'
        })
      }
    }
  )

});
// display all player
app.get('/allPlayers', (req, res) => {
  console.log('I am here allPlayers');
  //connect to DB and get all Matches
  // find FN prédéfinie de recherche
  Player.find((err, docs) => {
    if (err) {
      console.log('Error', err)
    } else {

      res.status(200).json({
        message: 'here all objects',
        players: docs
      });

    }
  }

  );

})

// traitement d'ajout 
app.post('/addplayer', multer({ storage: storage }).single('image'), (req, res) => {
  console.log('here in adding');
  // http :// localhost
  url = req.protocol + '://' + req.get('host');

  // create object to insert into db  
  // le modele qui assure la communication entre le app.js et la base de donnée mongo
  //body : teb3a front bech ta5edh les inputes eli el form 'html' 
  const player = new Player({
    name: req.body.name,
    date: req.body.date,

    image: url + '/images/' + req.file.filename
  });
  // then: apres fini la traitment de db 
  player.save().then(
    result => {
      res.status(200).json({
        message: "added successfully"
      })
    }
  );
});

// delete Player
app.delete('/deletePlayers/:id', (req, res) => {
  // req.params.id affiche le id 
  console.log('here in delete', req.params.id);
  // {} c'est un objet json
  Player.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});
// display Player
app.get('/displayPlayer/:id', (req, res) => {
  console.log('here in get ', req.params.id);
  Player.findOne({ _id: req.params.id }).then(
    data => {
      res.status(200).json({
        player: data
      })
    }
  )
});
// edit player
app.put('/editplayer/:id', (req, res) => {
  console.log('here in edit ', req.params.id);
  const player = new Player({
    _id: req.body._id,
    name: req.body.name,
    date: req.body.date

  });
  // update takes 2 params : 1st for search and the 2end to replace it 
  Player.update({ _id: req.params.id }, player).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'updated Successfully'
        })
      }
    }
  )

});

//get allUsers

app.get('/allAdmin', (req, res) => {
  console.log('I am here allAdmin');
  //connect to DB and get all admin
  // find FN prédéfinie de recherche
  User.find((err, docs) => {
    if (err) {
      console.log('Error', err)
    } else {

      res.status(200).json({
        message: 'here all objects',
        users: docs
      });

    }
  }

  );

})
// traitement d'ajout 
app.post('/addUser', multer({ storage: storage }).single('image'), (req, res) => {
  console.log('here in adding');
  // http :// localhost
  url = req.protocol + '://' + req.get('host');

  // create object to insert into db  
  // le modele qui assure la communication entre le app.js et la base de donnée mongo
  //body : teb3a front bech ta5edh les inputes eli el form 'html' 
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tel: req.body.tel,
    pwd: req.body.pwd,
    image: url + '/images/' + req.file.filename
  });
  // then: apres fini la traitment de db 
  user.save().then(
    result => {
      res.status(200).json({
        message: "added successfully"
      })
    }
  );
});

// delete user
app.delete('/deleteUser/:id', (req, res) => {
  // req.params.id affiche le id 
  console.log('here in delete', req.params.id);
  // {} c'est un objet json
  User.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});
//get user by id 
app.get('/displayUser/:id', (req, res) => {
  console.log('here in get ', req.params.id);
  User.findOne({ _id: req.params.id }).then(
    data => {
      res.status(200).json({
        user: data
      })
    }
  )
});
// edit User
app.put('/editUser/:id',(req, res) => {
  console.log('here in edit ', req.params.id);
  const user = new User({
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
  });
    // update takes 2 params : 1st for search and the 2end to replace it 
    User.update({ _id: req.params.id }, user).then(
      result => {
        if (result) {
          res.status(200).json({
            message: 'updated Successfully'
          })
        }
      }
    )
  
  });
// login user 
app.post('/login', (req, res) => {
  User.find({ email: req.body.email, pwd: req.body.pwd }).then(
    data => {
      console.log('finded user ', data);
      if (data) {
        res.status(200).json({
          user: data
        })
      }
    }

  );
})
//search by term
app.get('/api/search/:term', (req, res) => {
  console.log('req.body', req.body);
  console.log('req.params', req.params.term);
  Match.find({ teamOne: req.params.term }).then(result => {
    console.log('Here searched result', result);
    if (result) {
      res.send(result);
    }
  }
  )

});
// search by name 
app.get('/api/search/:name', (req, res) => {
  console.log('req.body', req.body);
  console.log('req.params', req.params.name);
  Player.find({ name: req.params.name }).then(
    result => {
      console.log('Here searched result', result);
      if (result) {
        res.send(result);
      }
    }
  )
});
// get all satdiums

app.get('/allStadiums', (req, res) => {
  console.log('I am here allStadiums');
  //connect to DB and get all Matches
  // find FN prédéfinie de recherche
  Stadium.find((err, docs) => {
    if (err) {
      console.log('Error', err)
    } else {

      res.status(200).json({
        message: 'here all objects',
        stadiums: docs
      });

    }
  }

  );

})


app.delete('/deleteStadium/:id', (req, res) => {
  // req.params.id affiche le id 
  console.log('here in delete', req.params.id);
  // {} c'est un objet json
  Stadium.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});

// traitement d'ajout 
app.post('/addStadium',  (req, res) => {
  console.log('here in adding');
  // http :// localhost

  // create object to insert into db  
  // le modele qui assure la communication entre le app.js et la base de donnée mongo
  //body : teb3a front bech ta5edh les inputes eli el form 'html' 
  const stadium = new Stadium({
    name: req.body.name,
    country: req.body.country,
    capacity: req.body.capacity

  });
  // then: apres fini la traitment de db 
  stadium.save().then(
    result => {
      res.status(200).json({
        message: "added successfully"
      })
    }
  );
});

// display Stadium
app.get('/displayStadium/:id', (req, res) => {
  console.log('here in get ', req.params.id);
  Stadium.findOne({ _id: req.params.id }).then(
    data => {
      res.status(200).json({
        stadium: data
      })
    }
  )
});
// edit player 
app.put('/editStadium/:id', (req, res) => {
  console.log('here in edit ', req.params.id);
  const stadium = new Stadium({
    _id: req.body._id,
    name: req.body.name,
    country: req.body.country,
    capacity: req.body.capacity

  });
  // update takes 2 params : 1st for search and the 2end to replace it 
  Stadium.update({ _id: req.params.id }, stadium).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'updated Successfully'
        })
      }
    }
  )

});
// preparer app pour etre exporter
module.exports = app;