import React from 'react'
import {useState,useEffect} from 'react'
import{  
    Link,
    useParams
  } from 'react-router-dom';
export const Product = ({method}) => {
    let params=useParams()
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
                .then(res=>res.json())
                .then(json=>{setProduct(json);})
      },[])
    const buyProduct=(item)=>{
        let cart = JSON.parse(localStorage.getItem('cart'))
        console.log(cart);
        if(cart==null){
            localStorage.setItem('cart',JSON.stringify([item]));
        }else{
            cart.push(item)
            localStorage.setItem('cart',JSON.stringify(cart));
        }
        method();

    }
    return (
        <div className="product">
            <Link to={`/category/${params.name}`}>Back</Link>
            <h3>{product.title}</h3>
            <div className="image">
                <img src={product.image}></img>
            </div>
            <h4>Price: ${product.price}</h4>
            <p>{product.description}</p>
            <button className='btn buyBtn' onClick={()=>buyProduct(product)}>BUY</button>

        </div>
    )
}
