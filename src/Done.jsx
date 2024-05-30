import "bootstrap-icons/font/bootstrap-icons.css";
import './Done.css'
import Task from "./Task";


function Done({todos, handleTick, handleDelete}) {
    return (
        
      <div className='done mb-2'>
      <p className="task">Done - {todos.length}</p>
      <div className='list-group todo-list'>
        { todos.map(todo => {
          return <Task task = {todo} key = {todo.id} handleTick = {handleTick} handleDelete={handleDelete} />
        })}
      </div>
    </div>
    )
}

export default Done