const express = require('express');
const mustacheExpress = require('mustache-express');
// const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res){
  res.render('login')
})

app.listen(3000, function(){
  console.log('Successfully started the express application!');
})
