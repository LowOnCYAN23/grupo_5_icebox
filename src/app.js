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
//RUTAS DE API-REACT=============================================
const apiUsers = require('./routes/api/apiUsersRoute');
app.use(apiUsers);
const apiProducts = require('./routes/api/apiProductsRoute');
app.use(apiProducts);
const apiCategories = require('./routes/api/apiCategoriesRoute');
app.use(apiCategories);
//===============================================================
app.listen(process.env.PORT || 5000, () => {
  console.log('Servidor 5000 ACTIVADO');
});
