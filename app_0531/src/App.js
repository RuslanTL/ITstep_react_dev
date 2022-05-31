
import './App.css';
import React,{useState, useEffect} from 'react';
import {MyComponent} from './MyComponent'
import {Post} from './Post'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      return response.json()
    })
    .then(data=>{
      setPosts(data);
    })
  }, [])
  return (
    <div className="App">
      {// <MyComponent text="MyComponent"/>
      }
      {
        posts.map(item=>
          <Post
            userId={item.userId}
            id={item.id}
            title={item.title}
            body={item.body} 
          />
        )
      }
    </div>
  );
}

export default App;
