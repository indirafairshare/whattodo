import "bootstrap-icons/font/bootstrap-icons.css";
import './ToDo.css'
import Task from "./Task";


function ToDo({ todos, handleTick, handleDelete }) {
  return (
    <div className='todo mb-2'>
      <p>Tasks to do - {todos.length}</p>
      <div className='list-group todo-list'>
        {todos.map(todo => {
          return <Task task={todo} key = {todo.id} handleTick={handleTick} handleDelete = {handleDelete} />
        })}
      </div>
    </div>
  )
}

export default ToDo