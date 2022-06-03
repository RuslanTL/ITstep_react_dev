
import './App.css';
import React,{useState,useEffect} from 'react';
import {Question} from './Question'
import {Finish} from './Finish'

function App() {
  const [question, setQuestion] = useState([])
  const [page,setPage] = useState(0);
  const [finished,setFinished] = useState(false);
  const [questions,setQuestions]=useState([
    {
      id:1,
      question:"what is the capital of australia",
      answers:[
        {
          id:1,
          text:"sydney",
          correct:false,
          checked:false,
        },
        {
          id:2,
          text:"canberra",
          correct:true,
          checked:false
        },
        {
          id:3,
          text:"auckland",
          correct:false,
          checked:false
        },
        {
          id:4,
          text:"melbourne",
          correct:false,
          checked:false
        },
      ],
    },
    {
      id:2,
      question:"how many people are on earth",
      answers:[
        {
          id:1,
          text:"7.9 billion",
          correct:true,
          checked:false
        },
        {
          id:2,
          text:"6.5 billion",
          correct:false,
          checked:false
        },
        {
          id:3,
          text:"10 billion",
          correct:false,
          checked:false
        },
        {
          id:4,
          text:"900 million",
          correct:false,
          checked:false
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
          text:"1983",
          correct:false,
          checked:false
        },
        {
          id:2,
          text:"1993",
          correct:false,
          checked:false
        },
        {
          id:3,
          text:"1989",
          correct:false,
          checked:false
        },
        {
          id:4,
          text:"1991",
          correct:true,
          checked:false
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
          text:"java",
          correct:false,
          checked:false
        },
        {
          id:2,
          text:"c++",
          correct:false,
          checked:false
        },
        {
          id:3,
          text:"python",
          correct:false,
          checked:false
        },
        {
          id:4,
          text:"javascript",
          correct:true,
          checked:false
        },
      ],
      correct:4
    },
  ])
  const [correct,setCorrect] = useState([
    false,false,false,false
  ])
  const changeChecked=(question,answer)=>{
    const indexQuestion = questions.findIndex(item=> item.id==question)
    const indexAnswer = questions[indexQuestion].answers.findIndex(item=> item.id==answer)
    console.log(indexAnswer);
    let array=[...questions]
    for (let i = 0; i < array[indexQuestion].answers.length; i++) {
      array[indexQuestion].answers[i].checked=false;
    }
    array[indexQuestion].answers[indexAnswer].checked = !questions[indexQuestion].answers[indexAnswer].checked
    console.log(array[indexQuestion].answers[indexAnswer].correct)
    let results =correct
    results[indexQuestion]=array[indexQuestion].answers[indexAnswer].correct
    setCorrect(results);
    console.log(correct);
    setQuestion([array[page]])
  }
  useEffect(() => {
    setQuestion([questions[page]])
  },[page])
  const back=()=>{
    if(!page==0)
    {
      setPage(page-1)
    }
  }
  const forward=()=>{
    if(page<questions.length-1)
    {
      setPage(page+1)
    }
  }
  const finish=()=>{
    console.log("finish")
    setFinished(true);
  }
  return (
    <div className="App">
      {
        finished? "" :
        question.map(item=>
        <Question
          id={item.id}
          question={item.question}
          answers={item.answers}
          method={changeChecked}
        />)
      }
    
    {
      (finished) ? "" : 
      <div>
        <button onClick={()=>back()}>Previous</button>
        <button onClick={()=>forward()}>Next</button>
        <hr></hr>
        {
          (page==questions.length-1)? <button onClick={()=>finish()}> Finish</button>: ""
        } 
      </div>

    }
    {
      (finished)?<Finish correct={correct}/>:""

    }
    </div>
  );
}

export default App;
