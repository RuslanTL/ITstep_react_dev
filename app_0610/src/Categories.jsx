import React from 'react'
import {useState,useEffect} from 'react'
import{  
    Link,
  } from 'react-router-dom';
  
import './App.css';
export const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {   
        fetch(`https://fakestoreapi.com/products/categories`)
        .then(res=>res.json())
        .then(json=>{setCategories(json)})

    }, [])
    
  return (
    <div className="menu">
        {
            categories.map(c=>
                <Link className="category" to={`category/${c}`}>
                    {c} 
                </Link>
            )
        }
    </div>
  )
}
