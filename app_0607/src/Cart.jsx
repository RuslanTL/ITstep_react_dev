import cartImg from './shopping-cart.png'
import React, { useState ,useEffect} from 'react'
export const Cart = ({cart,setCart}) => {

    
    const [active,setActive]=useState(false)
    const [cleared,setCleared]=useState(false)
    const [dropdown,setDropdown]=useState("cartDropdown")
    const [total,setTotal]=useState(0);
    useEffect(() => {
        setCleared(false);
        if(!cleared){
            localStorage.setItem('cart',JSON.stringify(cart))
        }
        calcTotal();
    },[cart])
    useEffect(()=>{
    
        if(active){
            setDropdown("cartDropdown active")
        } else{
            setDropdown("cartDropdown")
        }
    },[active])
    const toggleDropdown=()=>{
        if(!active){
            setActive(true)
        } else{
            setActive(false)
        }
    }
    const clear=()=>{
        console.log("cleared")
        localStorage.setItem("cart",JSON.stringify([]))
        setCleared(true);
        setCart([])
        setActive(false);
    }
    const calcTotal=()=>{
        let sum = 0;
        for(let item of cart){
            sum+=item.price
        }
        setTotal(sum);
    }
    const remove=(unique)=>{
        setCart(cart.filter(item=>item.unique!=unique))
    }
    
    const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index) ]
    const add=(copyItem)=>{
        const indexItem = cart.findIndex(item=>item.unique==copyItem.unique);
        console.log(indexItem)
        const newItem = copyItem;
        newItem.unique=Math.floor(Date.now() * Math.random())
        setCart(insert(cart,indexItem,newItem));
    }
    return (
        <div className="cart">
            <h1>{cart.length}</h1>
            <img src={cartImg} alt="cart" onClick={toggleDropdown}></img>
            <div className={dropdown}>
                <ol>
                {
                    (cleared)? "":
                    cart.map((item)=>
                        <li>
                            <div className="cartItem">
                                <p>{item.title}</p>
                                <hr />
                                <b>${item.price}</b>
                                <hr />
                                <div className="buttons">
                                    <button className="itemBtn addBtn" onClick={(e)=>add(item)}>+</button>
                                    <button className="itemBtn removeBtn" onClick={(e)=>remove(item.unique)}>-</button>
                                </div>
                                
                            </div>
                        </li>
                        
                    )
                                        
                }   
                <h4>Items: {cart.length}</h4>
                <h4>Total:  ${total}</h4>
                <button onClick={clear}>CLEAR</button>
                </ol>
            </div>
        </div>
    )
}
