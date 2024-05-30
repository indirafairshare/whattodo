
function Task({task, handleTick, handleDelete}){
  
   const flag = task.priority == 1 ? "priority-red" : ((task.priority == 2) ? "priority-yellow" : "priority-green")
   if (task.done == false){
    return(
        <div className='card todo-card'>
              <div className='card-body'>
                <p className="task">{task.todo}</p>
                {task.do_by ? <p className={"due "+ flag}> Due: {task.do_by}</p> : <p></p>}
                <button className={"btn done-check "+ flag}><i className='bi bi-flag-fill'/></button>
                <button className='btn done-check'><i className='bi bi-trash' onClick={(e) => {e.preventDefault(); handleDelete(task.id)}} /></button>
                <button className='btn done-check'><i className='bi bi-check2' onClick={(e) => {e.preventDefault(); handleTick(task.id)}} /></button>
              </div>
            </div>
       ) 
   }
   else {
    return(
        <div className='card done-card'>
          <div className='card-body'>
            <p className="task">{task.todo}</p>
            <button className='btn done-trash'><i className='bi bi-trash' onClick={(e) => {e.preventDefault(); handleDelete(task.id)}} /></button>
            <button className='btn done-trash'><i className='bi bi-arrow-return-left' onClick={(e) => {e.preventDefault(); handleTick(task.id)}} /></button>
          </div>
        </div>
    )
   }
    
}

export default Task;