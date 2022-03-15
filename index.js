require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./app/router');
const debug = require('debug')('index:')

const app = express();

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

app.use(express.static('./public'));

app.use(express.json());

app.use(router);

app.listen(port, () => {
  debug(`Server started on http://localhost:${port}`);
});