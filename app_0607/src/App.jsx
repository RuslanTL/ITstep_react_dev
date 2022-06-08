
import './App.css';
import React,{useState,useEffect} from 'react';
import {Product} from './Product'
import {Header} from './Header'
function App() {
  const pageSize=5;
  const [products,setProducts] = useState([]);
  const [displayProducts,setDisplayProducts] = useState([]);
  const [allProducts,setAllProducts] = useState([products.slice(0, pageSize)]);
  const [selectCategory,setSelectCategory] = useState("0");
  const [selectSort,setSelectSort] = useState("0")
  const [page,setPage] = useState(1);
  const [pages,setPages]=useState([]);
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setProducts(json); setAllProducts(json)})
  },[])
  useEffect(() => {
    if(localStorage.getItem('cart')!=null){
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])
  useEffect(()=>{
    const newPages = []
    for (let i = 0; i < products.length; i += pageSize) {
      const pageItems = products.slice(i, i + pageSize);
      
      newPages.push(pageItems);
    }
    setPages(newPages);
    console.log(pages)
    if(pages.length>0){
      setDisplayProducts(pages[0])
    }
  },[products])
  // let categories = new Set();
  // for(let item of products){
  //   categories.add(item.category)
  // }
  // categories = Array.from(categories).sort();
  const categories=['electronics','jewelery',"men's clothing","women's clothing"]

  const handleCategory=(val,reset)=>{
    setSelectCategory(val)
    if(val==0){
      setProducts(allProducts)
    }else{
      setProducts(allProducts.filter(product=>product.category==val))
    }
    if(reset){
      setSelectSort("0")
    }
    setDisplayProducts(pages[page-1])
  }
  const handleSort=(val)=>{
    setSelectSort(val)
    handleCategory(selectCategory);
    const unsorted = allProducts.filter(product=>product.category==selectCategory)
    if(val == 0){
      setProducts(unsorted);
    } else if(val==1){
      setProducts([...products].sort((a,b)=>a.price-b.price))
    } else if (val==2){
      setProducts([...products].sort((a,b)=>b.price-a.price))
    }
    setDisplayProducts(pages[page-1])
  }
  const back=()=>{
    if(page>1){
      setPage(page-1);
      handlePage(page-1);
    }
    
  }
  const forward=()=>{
    if(page<pages.length){
      setPage(page+1);
      handlePage(page+1);
    }

  }
  const handlePage=(pg)=>{
    setDisplayProducts(pages[pg-1])
  }
  return (
    <div className="App">
      <Header cart={cart} setCart={setCart}/> 
      <nav>
        <div className="pageSelect">
          <button className="btn backBtn" onClick={back}>back</button>
          <hr />
          <h2>Page {page}</h2>
          <hr />
          <button className="btn forwardBtn" onClick={forward}>forward</button>
        </div>
      </nav>

      <div className="border"></div>
      <div className="options">
        <div className="option categories">
          <p>Category: </p>
          <select value={selectCategory} onChange={(e)=>handleCategory(e.target.value,true)}>
            <option value="0">All Categories</option>
            {
              categories.map((c,idx)=><option value={c}>
                {c}
              </option>)
            }
          </select>
        </div>
        <div className="option sort">
          <p>Sort: </p>
          <select value={selectSort}  onChange={(e)=>handleSort(e.target.value)}>
            <option value="0">No Sort</option>
            <option value="1">Ascending Price</option>
            <option value="2">Descending Price</option>
          </select>
        </div>
      </div>
      <div className="border"></div>
      <div className="store">
      {displayProducts.map(item=>
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
