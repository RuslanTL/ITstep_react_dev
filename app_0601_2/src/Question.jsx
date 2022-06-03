import React,{useState} from 'react'

export const Question = (props) => {
  const check=(answer)=>{
    props.method(props.id,answer.value);


    // if(answer.value==props.correct){
    //   console.log("correct");
      
    // } else{
    //   console.log("wrong")
    // }
  }
  return (
    <div value={props.id} className="question">
      <h3>Question {props.id}:</h3>
      <h2>{props.question}</h2>
      <div className="options">
        {
          props.answers.map((answer)=>
          <button style={
            

            {backgroundColor:"white"}
            
            
            } value={answer.id} className = {"option "+props.id+"-"+answer.id+" "+(answer.checked? "checked" : "")} onClick={(e)=>check(e.currentTarget)}>
            <h4>{answer.id}</h4>
            <h3>{answer.text}</h3>
          </button>
          )
        }
      </div>
    </div>
  )
}
