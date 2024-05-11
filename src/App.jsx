import { useState } from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateTask from './CreateTask';
import ToDo from './ToDo';
import Done from './Done';

function App() {
  const [tasks, setTasks] = useState([
  ])

  function handleNewTask(new_task) {
    setTasks([
      ...tasks,
      {
        "id": (tasks.length + 1), "todo": new_task, "done": false
      }
    ])
  }

  function handleTaskDone(task_id) {
    const nextTasks = tasks.map((task) => {
      if (task.id == task_id){
        return {
          ...task,
          "done": task.done ? false : true
        }
      }
      else {
        return task;
      }
    })
    setTasks(nextTasks);
  }

  function handleTaskDelete(task_id){
    const nextTasks = tasks.filter((task) => task.id != task_id)
    setTasks(nextTasks);
  }


  return (
    <>
      <div className='align-self-center mb-2'>
        <CreateTask handleSubmit={handleNewTask} />
        <ToDo todos={tasks.filter(function (task) { return task.done == false })} handleTick = {handleTaskDone} handleDelete = {handleTaskDelete} />
        <Done todos={tasks.filter(function (task) { return task.done == true })} handleTick = {handleTaskDone} handleDelete = {handleTaskDelete}/>
      </div>
    </>
  )
}

export default App