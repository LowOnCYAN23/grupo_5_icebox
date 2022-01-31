import React from 'react';
//COMPONENTS
import ProductsTotal from '../products/ProductsTotal.jsx';
import ProductsList from '../products/ProductsList.jsx';
import ProductLastCreated from '../products/ProductLastCreated.jsx';
import UsersTotal from '../users/UsersTotal.jsx';
import UsersList from '../users/UsersList.jsx';
import UserLastCreated from '../users/UserLastCreated.jsx';
import CategoriesTotal from '../categories/CategoriesTotal.jsx';
import CategoriesList from '../categories/CategoriesList.jsx';
//STYLE SHEET
import '../pages/css/app.css';
//DASHBOARD
export default function Dashboard() {
  return (
    <>
      <div id="navegador">
          <ul>
            <li><ProductsTotal />     </li>
            <li><UsersTotal />        </li>
            <li><CategoriesTotal />   </li>
            <li><ProductLastCreated /></li>
            <li><UserLastCreated />   </li>
            <li><UsersList />         </li>
            <li><ProductsList />      </li>
            <li><CategoriesList />    </li>
          </ul>
      </div>
      <div id="navegador">
        <ul>
          <h1>::::::::::ICEBOX - REACT::::::::::</h1>
        </ul>
      </div>
    </>
  )
};