import React,{useState} from 'react'
import './Task.css'
export const AddTask = ({method}) => {
    const [input, setInput] = useState(" ");
    const [priority, setPriority] = useState(0);
    return (
        <div className="addTask">
            <input value={input} type="text" onChange={(event)=>setInput(event.target.value)} placeholder="enter task"/>
            <label htmlFor="priority">select priority:</label>
            <select  value={priority} onChange={
                (event)=>{
                    setPriority(parseInt(event.target.value));
                   // console.log(event.target.value)
                }
                }  
                name="priority" id="priority">
                <option value="0">low</option>
                <option value="1">medium</option>
                <option value="2">high</option>
            </select>
            <button onClick={()=>method(
                {
                    text:input,
                    priority,
                    status:false
                }
            )}>Add</button>
        </div>
    )
}
