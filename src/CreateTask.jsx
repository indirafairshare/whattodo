import "bootstrap-icons/font/bootstrap-icons.css";
import './CreateTask.css'
import { useState } from "react";


function CreateTask({ handleSubmit }) {
  const [new_task, setNewTask] = useState({"name": '', "priority":1, "do_by": new Date().toJSON()})
  const onOptionChange = e => {
    setNewTask({...new_task, "priority": e.target.value})
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); console.log(new_task); handleSubmit(new_task); setNewTask({"name": '', "priority":1, "do_by": new Date().toJSON()}); }}>
      <div className='input-group mb-2 add-task'>
        <input type='text' className='form-control rounded-1' placeholder='Add a new task' value={new_task.name} name="add_task" required="required" onChange={e => setNewTask({...new_task, "name": e.target.value})} />
        <input type='datetime-local' className='form-control rounded-1' value={new_task.do_by} name="add_task" required="required" onChange={e => setNewTask({...new_task, "do_by": e.target.value})} />
        <div className="priority-flags">
          <input type="radio" name = "priority" className="priority-red" value={1} id="high" onChange={onOptionChange} defaultChecked/><label className="priority-red" htmlFor = "high"><i className='bi bi-flag-fill'/></label>
          <input type="radio" name="priority" className="priority-yellow" value={2} id="med" onChange={onOptionChange}/><label className="priority-yellow" htmlFor = "med"><i className='bi bi-flag-fill'/></label>
          <input type="radio" className="priority-green" name = "priority" value={3} id="low" onChange={onOptionChange}/><label className="priority-green" htmlFor = "low"><i className='bi bi-flag-fill'/></label>
        </div>
       
        <button className='btn rounded-1 submit' ><i className='bi bi-plus-lg' /></button>
      </div>
    </form>
  )
}

export default CreateTask