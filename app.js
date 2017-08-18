const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();


app.use(bodyParser.urlencoded({
  extended: false
}));


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

const username_password = [{
    user: 'jimminy',
    password: 'cricket'
  },
  {
    user: 'alfred',
    password: 'hitchcock'
  },
  {
    user: 'marlon',
    password: 'brando'
  },
  {
    user: 'tupac',
    password: 'shakur'
  }
]



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(function(req, res, next) {
  if (req.url == '/login') {
    next()
  } else if (!req.sessions.username) {
    res.render('login')
  } else {
    next()
  }
})

app.get('/', function(req, res) {
  console.log('in home');
  res.render('home')
})

app.post('/login', function(req, res) {
  console.log("username is " + req.body.username);
  console.log("password is " + req.body.password);
  username_password.foreach(function(username_password) {
    if (req.body.username === username_password.name && req.body.password === username_password.password) {
      req.session.username = true;
      res.render('home');
    } else {
      res.render('login', {error: true});
    }
  })
})

app.listen(3000, function() {
  console.log('Successfully started the express application!');
})
