const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
var path = require('path');
const controller = require('./database/controller/index.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, './client/dist')));
// app.use('/', express.static(__dirname + './client/dist'));

app.post('/api/acctCreation', controller.post);

app.patch('/api/billing', controller.patch);

app.patch('/api/shipping', controller.patch);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
