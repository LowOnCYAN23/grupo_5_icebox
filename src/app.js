const express = require('express');
const app = express();

const homeRoute = require('./routes/homeRoute');
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', homeRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/index', indexRoute);
app.use('/productDetail', productRoute);
app.use('/productCart', cartRoute);

app.listen(5000, () => {
  console.log('Servidor 5000 ACTIVADO');
});

/*app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html');
});

app.get('/productDetail', (req, res) => {
  res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/productCart', (req, res) => {
  res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

*/
