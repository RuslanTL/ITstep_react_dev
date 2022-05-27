import React,{useState} from 'react'
import './Task.css'
export const Task = ({id, text,priority,status, setPriority}) => {
    var priorityDict={
        0:"low",
        1:"medium",
        2:"high"
    }
    const [checked,setChecked]=useState(status);
    let newPriority =priority;
    let newChecked = status;
    return (
        <div className="task">
            {text}
            <div className="border"></div>
            priority:<b>{priorityDict[newPriority]}</b>
            <div className="border"></div>
            done:
            <input type="checkbox" name="done" defaultChecked={newChecked} onChange={(event)=>{
                newChecked=event.target.value;
                setChecked(newChecked);
            }} id=""/>
            <sub>{id}</sub>
            <select onChange={
                (event)=>{
                    setPriority(id,event.target.value);
                    

                }
                }  
                name="priority" id="priority">
                <option value="0" selected="selected">Select priority...</option>
                <option value="0">low</option>
                <option value="1">medium</option>
                <option value="2">high</option>
            </select>
        </div>
    )
}
