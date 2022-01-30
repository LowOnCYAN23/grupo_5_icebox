import React from 'react';
import {Link,Route,Routes} from 'react-router-dom';
//COMPONENTS
import ProductsTotal from '../users/UsersTotal.jsx';
import ProductsList from '../products/ProductsList.jsx';
import ProductLastCreated from '../products/ProductLastCreated.jsx';
import ProductId from '../products/ProductId.jsx'
import UsersTotal from '../users/UsersTotal.jsx';
import UsersList from '../users/UsersList.jsx';
import UserLastCreated from '../users/UserLastCreated.jsx';
import UserId from '../users/UserId.jsx';
import CategoriesTotal from '../categories/CategoriesTotal.jsx';
import CategoriesList from '../categories/CategoriesList.jsx';
import Dashboard from '../dashboard/Dashboard.jsx';
import Error404 from '../error/Error404.jsx';
//STYLE SHEET
import './css/app.css'

export default function App() {
  return (
    <div id="navegador">
      <ul>
        <h1>::ICEBOX - REACT::</h1>
        <li><Link to ='/api/userslist'>LISTA DE USUARIOS</Link></li>
        <li><Link to ='/api/users/:id'>DATOS DE USUARIO</Link></li>
        <li><Link to ='/api/productslist'>LISTA DE PRODUCTOS</Link></li>
        <li><Link to ='/api/products/:id'>DETALLE DE PRODUCTO</Link></li>
        <li><Link to ='/api/categorieslist'>CATEGORIAS DE PRODUCTOS</Link></li>
        <li><Link to ='/dashboard'>DASHBOARD DE ICEBOX</Link></li>
        <Routes>
          <Route path='/api/userslist'          element={<UsersList />}>      </Route>
          <Route path='/api/users'              element={<UsersTotal />}>     </Route>
          <Route path='/api/users/:id'          element={<UserId />}>         </Route>
          <Route path='/api/productslist'       element={<ProductsList />}>   </Route>
          <Route path='/api/products'           element={<ProductsTotal />}>  </Route>
          <Route path='/api/products/:id'       element={<ProductId />}>      </Route>
          <Route path='/api/categoriestotal'    element={<CategoriesTotal />}></Route>
          <Route path='/api/categorieslist'     element={<CategoriesList />}></Route>
          <Route path='/dashboard'              element={<Dashboard />}>      </Route>
          <Route path='*'                       element={<Error404 />}>       </Route>
        </Routes>
      </ul>
    </div>
  )
};