
import './App.css';
import React,{useState} from 'react'
import {Task} from './components/Task'
import {AddTask} from './components/AddTask'
import {DeleteTask} from './components/DeleteTask'
import {SortTask} from './components/SortTask'
function App() {
  
  const [tasks, setTask] = useState([
    {
      id:1,
      text:"Do dishes",
      priority:1,
      status:false
    },
    {
      id:2,
      text:"Do homework",
      priority:2,
      status:true
    },
    {
      id:3,
      text:"Go to the park",
      priority:0,
      status:false
    },
    
  ])
  const addTask =({text,priority,status})=>{
    const obj={
      id:getNewId(tasks),
      text,
      priority,
      status
    }
    console.log(priority);
    setTask([...tasks,obj])
  }
  const deleteTask=(id)=>{
    setTask(tasks.filter(item=>item.id!==id));
  }
  const deleteAll=()=>{
    setTask([]);
  }
  const deleteDone=()=>{
    setTask(tasks.filter(item=>item.status!=true));
  }
  const sortTasks=()=>{
    let arr=[...tasks]
    console.log(tasks)
    setTask(arr.sort((a,b) => (a.priority<b.priority) ? 1 : -1));
    console.log(tasks)
  }
  const getNewId=()=>{
    if(tasks.length===0){
      return 1;
    }
    let id =0;
    tasks.forEach(element => {
      if(element.id>id){
        id=element.id;
      }
    });
    return id+1;
  }
  const setPriority=(id,priority)=>{
    const index=tasks.findIndex(t=>t.id==id);
    const temp = [...tasks]
    temp[index].priority=priority
    setTask(temp);

  }
  return (
    <div className="App">
      <div className="taskList">
        <div className="options">
          <AddTask method={addTask} />
          <button onClick={deleteAll}>Delete All</button>
          <button onClick={deleteDone}>Delete Done</button>
          <SortTask method={sortTasks}/>
        </div>
        {
          tasks.forEach(item=>{
            console.log(item);
          })
        }

        {
          tasks.map(item=>
            <div className="task_">
              {/* <p>{item.text} {item.priority} {item.status.toString()}</p> */}
              <Task 
              id={item.id}
              text={item.text}
              priority={item.priority}
              status={item.status}
              
              setPriority={setPriority}/>
              
              <DeleteTask id={item.id} method={deleteTask}/>
            </div>
          )
        }

      </div>

    </div>
  );
}

export default App;
