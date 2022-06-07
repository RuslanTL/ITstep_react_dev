
import './App.css';
import React,{useState,useEffect} from 'react';
import {Product} from './Product'
import {Header} from './Header'
function App() {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  },[])
  useEffect(() => {
    if(localStorage.getItem('cart')!=null){
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])
  
  return (
    <div className="App">
      <Header cart={cart} setCart={setCart}/> 
      <div className="store">
      {products.map(item=>
        <Product 
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
        rating={item.rating}
        
        cart={cart}
        setCart={setCart}
        />)
        }
      </div>
     
    </div>
  );
}

export default App;
