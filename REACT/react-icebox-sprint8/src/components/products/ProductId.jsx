import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function ProductId() {
  const [ProductId, setProductsId] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/products/:id')
          .then(({data}) => { 
              console.log(data);
              setProductsId(JSON.stringify(data));
              //console.log('ProductId', ProductId);
            })
          .catch(e=>console.log(e))
      },[])
  return (
      <div>
        <h1>DETALLE DE PRODUCTO</h1>
        <p>{ProductId}</p>
      </div>
    //console.log('ProductId')
  )
};