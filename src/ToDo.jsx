import "bootstrap-icons/font/bootstrap-icons.css";
import './ToDo.css'
import Task from "./Task";


function ToDo({ todos, handleTick, handleDelete }) {
  return (
    <div className='todo mb-2'>
      <p className="task">Tasks to do - {todos.length}</p>
      <div className='list-group todo-list'>
        {/* {console.log(todos.sort((a,b) => a.priority - b.priority))} */}
        {todos.sort((a,b) => a.priority - b.priority).map(todo => {
          return <Task task={todo} key = {todo.id} handleTick={handleTick} handleDelete = {handleDelete} />
        })}
      </div>
    </div>
  )
}

export default ToDo