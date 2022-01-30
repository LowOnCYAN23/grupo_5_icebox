import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function ProductsTotal() {
  const [products, setProducts] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/products/')
          .then(({data}) => { 
              console.log(data);
              setProducts(data.length);
            })
          .catch(e=>console.log(e))
      },[])
  return (
    <div>
        <h1>TOTAL DE PRODUCTOS</h1>
        <p>{products}</p>
    </div>


    //console.log('ProductsTotal')
  )
};