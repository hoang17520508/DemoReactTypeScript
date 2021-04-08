import React,{ChangeEvent, FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ITask} from './interface'
import TodoTask from './component/TodoTask';

const  App:FC=()=>{
  const[task,setTask]=useState<string>("");
  const [deadline,setDeadline]=useState<number>(0);
  const [todolist,setTodolist]=useState<ITask[]>([]);
  const handleChange=(e:ChangeEvent<HTMLInputElement>):void=>{
    if(e.target.name==="task")
    setTask(e.target.value);
    else
    setDeadline(Number(e.target.value));

  }
  const addTask=():void=>{
    const newTask={taskName:task,deadline:deadline}
setTodolist([...todolist,newTask]);
console.log("todolist",todolist);
  }
  const completeTask=(taskNameToDelete:string):void=>{
    setTodolist(todolist.filter((task)=>{
      return task.taskName!=taskNameToDelete
    }))

  };
  return (
    <div className="App">
<div className="header">
<div className="inputContainer">
<input value={task} type="text" placeholder="Task...." name="task" onChange={handleChange} />
<input value={deadline} type="number" placeholder="Deadline (in Day) ..." name="deadline" onChange={handleChange} />
</div>
<button onClick={addTask}>
  AddTask
</button>

</div>
<div className="todoList">
{todolist.map((task:ITask,key:number)=>{
  return <TodoTask key={key} task={task} completeTask={completeTask} />
})}
</div>
    </div>
  )
}
export default App;
