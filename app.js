const express = require('express');
const app = express();

app.get('/', function (req, res){
  res.send('I am alive')
})

app.listen(3000, function(){
  console.log('Successfully started the express application!');
})
