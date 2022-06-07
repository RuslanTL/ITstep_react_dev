import './App.css';
import React,{useState,useEffect} from 'react';

export const Product = (props) => {
  const buyProduct=()=>{

    if(localStorage.getItem('cart')==null){
      const arr =[]
      arr.push(props)
      props.setCart(arr)
    } else{
      const json = JSON.parse(localStorage.getItem('cart'))
      json.push(props)
      props.setCart(json)
      console.log(props.cart)
    }

  }
  return (
    <div className="product">
        <h3>{props.title}</h3>
        
        <div className="image">
          <img src={props.image} alt={props.id}></img>
        </div>
        <sub>{props.category}</sub>
        <h4>${props.price}</h4>
        <p className='desc'>{props.description}</p>
        <button className='buyBtn' onClick={buyProduct}>BUY</button>
    </div>
  )
}
