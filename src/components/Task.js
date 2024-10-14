import React from 'react'
import { useState } from 'react'

function Task() {
    let tasks=[]
    let handleSubmit = (e) => {
        e.preventDefault();
        let task = document.getElementById("task").value;
        let taskdescription = document.getElementById("description").value;
        let completed = document.getElementById("completed").value;
        tasks.push({task:task,taskdescription:taskdescription,completed:completed});
        console.log(tasks);
    }
  const [disp, setdisp] = useState("false");
    let display = () => {
        setdisp("true");
    }
    


  return (
    <div>
        <h1>task</h1>
            <h1>Enter task name</h1>
            <input type="text" name="task" id="task"/><br/>
            <h1>Enter task description</h1>
            <input type="text" name="description" id="description"/><br/>
            <input type="checkbox" name="completed" id="completed"/><br/>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={display}>Display task</button>
            {disp==="true" && <h1>{tasks.task}</h1>}  


    </div>
  );
}

export default Task