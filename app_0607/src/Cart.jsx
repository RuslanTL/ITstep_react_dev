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
    const remove=(id)=>{
        console.log(id);
        setCart(cart.filter(item=>item.id!=id))
    }
    return (
        <div className="cart">
            <h1>{cart.length}</h1>
            <img src={cartImg} alt="cart" onClick={toggleDropdown}></img>
            <div className={dropdown}>
                <ul>
                {
                    (cleared)? "":
                    cart.map(item=>
                        <li>
                            <div className="cartItem">
                                <p>{item.title}</p>
                                <hr />
                                <b>${item.price}</b>
                                <hr />
                                <button className="removeBtn" onClick={e=>remove(item.id)}>-</button>
                            </div>
                        </li>
                        
                    )
                                        
                }   
                <h4>Total:  ${total}</h4>
                <button onClick={clear}>CLEAR</button>
                </ul>
            </div>
        </div>
    )
}
