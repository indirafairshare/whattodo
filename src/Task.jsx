import './Task.css'
import Filter from './Filter'
import { useEffect, useState } from 'react'
function Task({ todos, handleTick, handleDelete }) {
  const [currentTasks, setCurrentTasks] = useState(todos);
  const [filter_value, setFilterValue] = useState('')
  

  const flag = {
    "1": "priority-red",
    "2": "priority-yellow",
    "3": "priority-green"
  }

  useEffect(() => {
    console.log(filter_value)
    setCurrentTasks(() => {
      const newArray = todos.filter((todo) => todo.todo.includes(filter_value))
      console.log(newArray)
      return newArray
    })
  }, [filter_value, todos])

  return (
    <div className='tasks'>
      <Filter setFilterValue={setFilterValue}/>
      <div className='mb-2'>
        <p className="heading">Tasks to do - {currentTasks.filter((todo) => todo.done == false).length}</p>
        <div className='list-group todo-list'>
          {currentTasks.filter((todo) => todo.done == false).sort((a, b) => a.priority - b.priority).map(task => {
            return (
              <div className='card' key={task.id}>
                <div className='card-body'>
                  <p className="task">{task.todo}</p>
                  {task.do_by ? <p className={"task " + flag[(task.priority).toString()]}> Due: {task.do_by}</p> : <p></p>}
                  <button className={"btn " + flag[(task.priority).toString()]}><i className='bi bi-flag-fill' /></button>
                  <button className='btn'><i className='bi bi-trash' onClick={(e) => { e.preventDefault(); handleDelete(task.id) }} /></button>
                  <button className='btn'><i className='bi bi-check2' onClick={(e) => { e.preventDefault(); handleTick(task.id) }} /></button>
                </div>
              </div>)
          })}
        </div>
      </div>
      <div className='mb-2'>
        <p className="heading">Done - {currentTasks.filter((todo) => todo.done == true).length}</p>
        <div className='list-group todo-list'>
          {currentTasks.filter((todo) => todo.done == true).sort((a, b) => a.priority - b.priority).map(task => {
            return (
              <div className='card' key={task.id}>
                <div className='card-body'>
                  <p className="task done">{task.todo}</p>
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