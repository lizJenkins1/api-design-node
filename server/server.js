// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions

// GET
app.get('/lions', (req, res) => {
    console.log(req)
    res.json(lions);
});

// FETCH
app.get('/lions/:id', (req, res) => {
    console.log(req.params);
    var lion = _.find(lions, {id: req.params.id});
    res.json(lion || {});
});

// POST
app.post('/lions', (req, res) => {
    var lion = req.body;
    id++;
    lion.id = id + '';

    lions.push(lion);
    
    res.json(lion);
});

// PUT
app.put('/lions/:id', function(req, res) {
    var update = req.body;
    if (update.id) {
      delete update.id
    }
  
    var lion = _.findIndex(lions, {id: req.params.id});
    if (!lions[lion]) {
      res.send();
    } else {
      var updatedLion = _.assign(lions[lion], update);
      res.json(updatedLion);
    }
});

app.listen(3000);
console.log('on port 3000');
