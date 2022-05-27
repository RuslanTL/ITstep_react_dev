import './App.css';
import { Post } from './Post';

function App() {
  const post = [
    {
        id:1,
        title:"Пост 1",
        content:"....",
        comments:[
          {
            id:1,
            text:"",
            author:""
          },
          {
            id:1,
            text:"",
            author:""
          }
        ]
    },
    {
        id:2,
        title:"Пост 2",
        content:"...."
    },
    {
        id:3,
        title:"Пост 3",
        content:"...."
    }
  ]
  return (
    <div className="App">
      {
      post.map(({id,title,url,content}) => 
      <Post 
        key={id}
        title={title} 
        id={id} 
        url={url} 
        content={content}/>)
      }
    </div>
  );
}

export default App;
