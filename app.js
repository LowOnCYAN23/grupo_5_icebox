const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

const homeRoute = require('./src/routes/homeRoute');
const loginRoute = require('./src/routes/loginRoute');
const registerRoute = require('./src/routes/registerRoute');
const admonRoute = require ('./src/routes/admonRoute');
const indexRoute = require('./src/routes/indexRoute');
const productRoute = require('./src/routes/productRoute');
const cartRoute = require('./src/routes/cartRoute');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/public', express.static(publicPath));

app.use('/', homeRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/admon',admonRoute);
app.use('/index', indexRoute);
app.use('/productDetail', productRoute);
app.use('/productCart', cartRoute);

app.listen(5000, () => {
  console.log('Servidor 5000 ACTIVADO');
});

