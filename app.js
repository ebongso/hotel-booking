const express = require('express');
const path = require('path');

const index = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', index);

app.listen(port, () => {
  console.log('server is ready');
});