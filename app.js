const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
 

const Router = require('./routes/index');

app.use('/index', Router)

app.use(express.static(path.join(__dirname,'public')))

app.listen(4000)