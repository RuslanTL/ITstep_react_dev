import React,{useState} from 'react'
import './Task.css'
export const Task = (props) => {
    var priorityDict={
        0:"low",
        1:"medium",
        2:"high"
    }
    const [checked,setChecked]=useState(props.item.status);
    const [priority, setPriority] = useState(props.item.priority);
    return (
        <div className="task">
            {props.item.text}
            <div className="border"></div>
            priority:<b>{priorityDict[priority]}</b>
            <div className="border"></div>
            done:
            <input type="checkbox" name="done" defaultChecked={checked} onChange={(event)=>{
                setChecked(event.target.value)
                }} id=""/>
            <sub>{props.item.id}</sub>
            <select  value={priority} onChange={
                (event)=>{
                    setPriority(parseInt(event.target.value))
                }
                }  
                name="priority" id="priority">
                <option selected="selected">Select priority...</option>
                <option value="0">low</option>
                <option value="1">medium</option>
                <option value="2">high</option>
            </select>
        </div>
    )
}
