const express = require('express');
const app = express();

app.set('view engine', 'ejs');


const Router = require('./routes/index');

app.use('/index', Router)

app.listen(4000)