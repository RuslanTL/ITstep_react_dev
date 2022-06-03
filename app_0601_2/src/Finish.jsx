import React from 'react'
import './App.css'
export const Finish = (props) => {
    let rights=0;
    let wrongs=0;
    return (
        <div className="finish">
            <h1>FINISHED</h1>
            <h3>results:</h3>
            <div className="results">
            {
                props.correct.map((item,idx)=>
                    <div className="result">
                        <h3>Question {idx+1}:</h3>
                        <h4>{(item)?"correct" :"wrong"}</h4>
                    </div>
                )
            }
            </div>
            {
                props.correct.forEach((item)=>{
                    (item)? rights++ : wrongs++;
                })
            }
            <h5>right answers: {rights}</h5>
            <h5>wrong answers:{wrongs}</h5>
        
        </div>
  )
}
