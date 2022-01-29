import React from 'react';
import {Link,Route,Routes} from 'react-router-dom';
//COMPONENTS
import ApiProducts from '../products/ApiProducts.jsx';
import ApiProductsId from '../products/ApiProductsId.jsx';
import ApiUsers from '../users/ApiUsers.jsx';
import ApiUsersId from '../users/ApiUsersId.jsx';
import Dashboard from '../dashboard/Dashboard.jsx'
import Categories from '../categories/Categories.jsx';
import Error404 from '../error/Error404.jsx';

//import Ejemplo from '../users/Ejemplo.jsx';

export default function App() {
  return (
    <div>
      <h1>::ICEBOX - REACT::</h1>
      <li><Link to ='/api/users'>LISTA DE USUARIOS</Link></li>
      <li><Link to ='/api/users/:id'>DATOS DE USUARIO</Link></li>
      <li><Link to ='/api/products'>LISTA DE PRODUCTOS</Link></li>
      <li><Link to ='/api/products/:id'>DETALLE DE PRODUCTO</Link></li>
      <li><Link to ='/api/categories'>CATEGORIAS DE PRODUCTOS</Link></li>
      <li><Link to ='/dashboard'>DASHBOARD DE ICEBOX</Link></li>

      <Routes>
        <Route path='/api/users' element={<ApiUsers/>}></Route>
        <Route path='/api/users/:id' element={<ApiUsersId/>}></Route>
        <Route path='/api/products' element={<ApiProducts/>}></Route>
        <Route path='/api/products/:id' element={<ApiProductsId/>}></Route>
        <Route path='/api/categories' element={<Categories/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
      

    </div>
  )
};