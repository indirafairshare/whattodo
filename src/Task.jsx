import './Task.css'
function Task({ todos, handleTick, handleDelete }) {
  const todos_false = todos.filter((todo) => todo.done == false).sort((a, b) => a.priority - b.priority);
  const todos_true = todos.filter((todo) => todo.done == true).sort((a, b) => a.priority - b.priority);
  // console.log(todos)
  const flag = {
    "1": "priority-red",
    "2": "priority-yellow",
    "3": "priority-green"
  }
  return (
    <div className='tasks'>
      <div className='todo mb-2'>
        <p className="task">Tasks to do - {todos_false.length}</p>
        <div className='list-group todo-list'>
          {todos_false.map(task => {
            return (
              <div className='card todo-card' key={task.id}>
                <div className='card-body'>
                  <p className="task">{task.todo}</p>
                  {task.do_by ? <p className={"due " + flag[(task.priority).toString()]}> Due: {task.do_by}</p> : <p></p>}
                  <button className={"btn done-check " + flag[(task.priority).toString()]}><i className='bi bi-flag-fill' /></button>
                  <button className='btn done-check'><i className='bi bi-trash' onClick={(e) => { e.preventDefault(); handleDelete(task.id) }} /></button>
                  <button className='btn done-check'><i className='bi bi-check2' onClick={(e) => { e.preventDefault(); handleTick(task.id) }} /></button>
                </div>
              </div>)
          })}
        </div>
      </div>
      <div className='done mb-2'>
        <p className="task">Done - {todos_true.length}</p>
        <div className='list-group todo-list'>
          {todos_true.map(task => {
            return (
              <div className='card done-card' key={task.id}>
                <div className='card-body'>
                  <p className="task">{task.todo}</p>
                  <button className='btn done-trash'><i className='bi bi-trash' onClick={(e) => { e.preventDefault(); handleDelete(task.id) }} /></button>
                  <button className='btn done-trash'><i className='bi bi-arrow-return-left' onClick={(e) => { e.preventDefault(); handleTick(task.id) }} /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )

}

export default Task;