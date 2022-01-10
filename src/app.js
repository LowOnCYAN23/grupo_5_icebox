const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override');
const session = require('express-session');
const cookie = require('cookie-parser');

//const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const publicPath = path.resolve(__dirname, '../public');

const homeRoute = require('./routes/homeRoute');
const loginRoute = require('./routes/loginRoute');
//const logoutRoute = require('./routes/logoutRoute');
const registerRoute = require('./routes/registerRoute');
//const userProfileRoute = require('./routes/userProfileRoute');
const admonRoute = require('./routes/admonRoute');
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');
const listRoute = require('./routes/listRoute');

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.listen(app.get('port'),() => console.log('servidor ACTIVADO en port http://localhost:' + app.get('port')));


app.use('/public', express.static(publicPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));
app.use(
  session({ secret: 'Secret Message', resave: false, saveUninitialized: false })
);

//app.use(session({secret: 'secret', saveUninitialized: false, resave: false}));
//app.use((req,res,next) => {
//  res.locals.user = req.session && req.session.user ? req.session.user : null;
//  next();
//})
app.use(cookie());
//app.use(userLoggedMiddleware);

app.use('/', homeRoute);
app.use('/login', loginRoute);
//app.use('/logout', logoutRoute);
app.use('/register', registerRoute);

//app.use('/profile', userProfileRoute);
app.use('/admon', admonRoute);
app.use('/index', indexRoute);
app.use('/:id_product', productRoute);
app.use('/productCart', cartRoute);
app.use('/products', listRoute);


//app.listen(process.env.PORT || 5000, () => {
//console.log('Servidor ACTIVADO');
//});
