import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateTask from './CreateTask';
import ToDo from './ToDo';
import Done from './Done';
import * as FirestoreService from './config/firebase'

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    FirestoreService.getTasks().then(res => {
      const storedTasks = []
      res.forEach((doc) => {
        console.log(doc.data());
        storedTasks.push({
          "id": doc.id,
          "todo": doc.data().todo,
          "done": doc.data().done
        })
      });
      console.log(storedTasks);
      setTasks(storedTasks);
    });
    
  }, [])


  function handleNewTask(new_task) {
    FirestoreService.addTask(new_task).then(res => {
      console.log(res);
      setTasks([
        ...tasks,
        {
          "id": res.id, "todo": new_task, "done": false
        }
      ])
    })
    
  }

  function handleTaskDone(task_id) {
    const nextTasks = tasks.map((task) => {
      if (task.id == task_id){
        FirestoreService.updateTask(task_id, task.done).then(res => {
          console.log(res);
        })
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
