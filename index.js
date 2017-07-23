var express = require('express');
var admin = require("firebase-admin");
var serviceAccount = require("./keys/gameon-81135-firebase-adminsdk-5cl8k-1a14ece6c6.json");

var app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gameon-81135.firebaseio.com"
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


