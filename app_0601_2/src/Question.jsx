import React,{useState} from 'react'

export const Question = (props) => {
  const [correct, setCorrect] = useState(0); //0 - undefined 1 - incorrect 2 - correct
  const checkCorrect=(answer)=>{
    if(answer.value==props.correct){
      console.log("correct");
    } else{
      console.log("wrong")
    }
  
  }
  return (
    <div className="question">
      <h3>Question {props.id}:</h3>
      <h2>{props.question}</h2>
      <div className="options">
        {
          props.answers.map((answer)=>
          <button style={
            

            {backgroundColor:"white"}
            
            
            } value={answer.id} className = "option" onClick={(e)=>checkCorrect(e.currentTarget)}>
            <h4>{answer.id}</h4>
            <h3>{answer.text}</h3>
          </button>
          )
        }
      </div>
    </div>
  )
}
