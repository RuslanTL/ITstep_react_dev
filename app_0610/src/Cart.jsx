import React from 'react'
import {useState,useEffect} from 'react'
import{cart,setCart} from './Product'
export const Cart = ({cart,setCart,empty}) => {
  const showCart=()=>{
    console.log(cart);
  }

  return (
    <div className='cart'>

      <h4>Cart:</h4>
      <h3>{cart.length}</h3>
      <button onClick={showCart}>expand</button>
      <button onClick={empty}>empty</button>
    </div>
  )
}
