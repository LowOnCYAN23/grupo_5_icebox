const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override');
const session = require('express-session');

app.use(express.static(path.resolve(__dirname, '../public')));

const indexRoute = require('./routes/indexRoute');
const user = require('./routes/user');
const product = require('./routes/product');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));
app.use(
  session({ secret: 'Secret Message', resave: false, saveUninitialized: false })
);

app.use('/', indexRoute);
app.use(user);
app.use(product);
app.use((req, res, next) => {
  res.status(404).render('./404/404');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Servidor 5000 ACTIVADO');
});
