import React, { useState ,useEffect} from 'react'

import {Cart} from './Cart'
export const Header = (props) => {

  
  return (
    <div className="header">
        <h1>STORE</h1>
        <Cart cart={props.cart} setCart = {props.setCart}/>
    </div>
  )
}
