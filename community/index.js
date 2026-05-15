const express = require('express');
const app = express();
const hostname ='127.0.0.1';
const port = process.env.PORT || 3008; 
const ejs = require('ejs');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',require('./router/router'));
app.use(express.static(path.join(__dirname,'public')))

app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  })