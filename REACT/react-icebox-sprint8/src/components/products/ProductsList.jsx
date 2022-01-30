import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function ProductsList() {
  const [productsList, setProductsList] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/products/')
          .then(({data}) => { 
              console.log(data);
              setProductsList(JSON.stringify(data));
              //console.log('productsList', productsList);
            })
          .catch(e=>console.log(e))
      },[])
  return (
    <div>
        <h1>LISTADO DE PRODUCTOS</h1>
        <p>{productsList}</p>
    </div>
    //console.log('ProductsList')
  )
};