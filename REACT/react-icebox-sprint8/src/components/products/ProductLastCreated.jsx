import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function ProductsLastCreated() {

    const [productLast, setProductsLast] = useState([])
        useEffect(()=>{
            axios.get('http://localhost:5000/api/products/list')
            .then(({data}) => { 
                console.log(data);
                let i=(data.length)-1;
                let last=data[i];
                setProductsLast(JSON.stringify(last));
                //console.log('productLast', productLast);
            })
            .catch(e=>console.log(e))
        },[])
    return (
        <div>
            <h1>ULTIMO PRODUCTO CREADO</h1>
            <p>{productLast}</p>
        </div>
        //console.log('ProductsLastCreated')
    )
};