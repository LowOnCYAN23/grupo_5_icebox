const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const publicPath = path.resolve(__dirname, './public');

const homeRoute = require('./src/routes/homeRoute');
const loginRoute = require('./src/routes/loginRoute');
const registerRoute = require('./src/routes/registerRoute');
const admonRoute = require('./src/routes/admonRoute');
const indexRoute = require('./src/routes/indexRoute');
const productRoute = require('./src/routes/admonRoute');
const cartRoute = require('./src/routes/cartRoute');
const listRoute = require('./src/routes/listRoute');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/public', express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));
app.use(session({ secret: 'mensaje secreto' }));
app.use(cookieParser());

app.use('/', homeRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/admon', admonRoute);
app.use('/index', indexRoute);
app.use('/productDetail', productRoute);
app.use('/productCart', cartRoute);
app.use('/products', listRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('Servidor ACTIVADO');
});
