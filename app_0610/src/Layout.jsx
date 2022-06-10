import React,{useState} from 'react'
import{  
    Link,
    Outlet
  } from 'react-router-dom';
import { Cart } from './Cart';
import {Categories} from './Categories'


export const Layout = ({cart,setCart}) => {
    const empty=()=>{
        localStorage.setItem('cart',JSON.stringify([]))
        setCart(JSON.parse(localStorage.getItem('cart')));
    }
  return (
    <div>
        <Categories/>
        <Cart
            cart={cart} setCart = {setCart} empty={empty}
        />
        <div className="border"></div>
        <div className="item">
            <Outlet/>
        </div>
    </div>
  )
}
