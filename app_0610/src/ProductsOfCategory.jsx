import React from 'react'
import {useState,useEffect} from 'react'
import{  
    Link,
    useParams
  } from 'react-router-dom';
  
export const ProductsOfCategory = () => {
    const name = useParams().name   
    const [products,setProducts]=useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then(res=>res.json())
        .then(json=>{setProducts(json)})
    },[name])
    return (
        <div className="products">
            {
                products.map(item=>
                <div className="item">
                    <Link to={`${item.id}`}>
                        {item.title}
                    </Link>
                </div>
                )
            }
        </div>
    )
}
