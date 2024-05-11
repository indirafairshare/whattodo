import "bootstrap-icons/font/bootstrap-icons.css";
import './CreateTask.css'
import { useState } from "react";


function CreateTask({ handleSubmit }) {
  const [new_task, setNewTask] = useState('')
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(new_task); setNewTask(''); }}>
      <div className='input-group mb-2 add-task'>
        <input type='text' className='form-control rounded-1' placeholder='Add a new task' value={new_task} name="add_task" required="required" onChange={e => setNewTask(e.target.value)} />
        <button className='btn rounded-1 submit' ><i className='bi bi-plus-lg' /></button>
      </div>
    </form>
  )
}

export default CreateTask