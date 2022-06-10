
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import {Layout} from './Layout'
import {Home} from './Home'
import React,{useState,useEffect} from 'react'
import { ProductsOfCategory } from './ProductsOfCategory';
import { Product } from './Product';

function App() {
  const [cart,setCart]=useState([]);
  const insertInCart=()=>{
    if(localStorage.getItem('cart')!= null){
        setCart(JSON.parse(localStorage.getItem('cart')));
    }
  } 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout cart={cart} setCart={setCart}/>}>
            <Route index element={<Home/>}/>
            <Route path='category/:name' element={<ProductsOfCategory/>}/>
            <Route path='category/:name/:id' element={<Product method={insertInCart}/>}/>
            <Route path='*' element={<h2>Not Found</h2>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
