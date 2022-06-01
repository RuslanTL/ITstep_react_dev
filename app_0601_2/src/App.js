
import './App.css';
import React,{useState,useEffect} from 'react';
import {Question} from './Question'
function App() {
  const [question, setQuestion] = useState([])
  const [id,setId] = useState(0)
  const questions=[
    {
      id:1,
      question:"what is the capital of australia",
      answers:[
        {
          id:1,
          text:"sydney"
        },
        {
          id:2,
          text:"canberra"
        },
        {
          id:3,
          text:"auckland"
        },
        {
          id:4,
          text:"melbourne"
        },
      ],
      correct:2
    },
    {
      id:2,
      question:"how many people are on earth",
      answers:[
        {
          id:1,
          text:"7.9 billion"
        },
        {
          id:2,
          text:"6.5 billion"
        },
        {
          id:3,
          text:"10 billion"
        },
        {
          id:4,
          text:"900 million"
        },
      ],
      correct:1
    },
    {
      id:3,
      question:"when did the USSR dissolve",
      answers:[
        {
          id:1,
          text:"1983"
        },
        {
          id:2,
          text:"1993"
        },
        {
          id:3,
          text:"1989"
        },
        {
          id:4,
          text:"1991"
        },
      ],
      correct:4
    },
    {
      id:4,
      question:"what programming language does this website use",
      answers:[
        {
          id:1,
          text:"java"
        },
        {
          id:2,
          text:"c++"
        },
        {
          id:3,
          text:"python"
        },
        {
          id:4,
          text:"javascript"
        },
      ],
      correct:4
    },
  ]
  useEffect(() => {
    setQuestion([questions[id]])
  },[id])
  const back=()=>{
    if(!id==0)
    {
      setId(id-1)
    }
  }
  const forward=()=>{
    if(id<questions.length-1)
    {
      setId(id+1)
    }
  }
  return (
    <div className="App">
      {
        
        question.map(item=><Question
          id={item.id}
          question={item.question}
          answers={item.answers}
          correct={item.correct}
        />)
      }
    <button onClick={()=>back()}>Previous</button>
    <button onClick={()=>forward()}>Next</button>
    <hr></hr>
    {
      (id==questions.length-1)? <button>Finish</button>: ""
    }
    </div>
  );
}

export default App;
