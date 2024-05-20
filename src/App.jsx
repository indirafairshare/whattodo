import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateTask from './CreateTask';
import ToDo from './ToDo';
import Done from './Done';
import Navbar from './Navbar.jsx'
import * as FirestoreService from './config/firebase'
import { GoogleAuthProvider, getAuth, getRedirectResult, onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth';

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    FirestoreService.getTasks().then(res => {
      const storedTasks = []
      res.forEach((doc) => {
        // console.log(doc.data());
        storedTasks.push({
          "id": doc.id,
          "todo": doc.data().todo,
          "done": doc.data().done
        })
      });
      // console.log(storedTasks);
      setTasks(storedTasks);
    });

  }, [])

  function handleUser(currentLoggedIn) {
    const auth = getAuth();
    if (!currentLoggedIn) {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
      getRedirectResult(auth).then((result) => {
        console.log(result);
      })
    }
    else {
      signOut(auth);
    }
    onAuthStateChanged(auth, function (curr_user) {
      console.log("Auth state changed")
      if (curr_user) {
        setUser({ "uid": curr_user.uid, "email": curr_user.email, "name": curr_user.displayName });
        setIsLoggedIn(true);
      }
      else {
        setIsLoggedIn(false);
        setUser({})
        signOut(auth);
      }
    })
  }
  function handleNewTask(new_task) {
    FirestoreService.addTask(new_task).then(res => {
      // console.log(res);
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
      if (task.id == task_id) {
        FirestoreService.updateTask(task_id, task.done).then(res => {
          // console.log(res);
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

  function handleTaskDelete(task_id) {
    FirestoreService.deleteTask(task_id).then(res => {
      const nextTasks = tasks.filter((task) => task.id != task_id)
      setTasks(nextTasks);
    });

  }




  return (
    <>
      <Navbar user={user} isLoggedIn={isLoggedIn} handleUser={handleUser} />
      <div className='align-self-center mb-2'>
        <CreateTask handleSubmit={handleNewTask} />
        <ToDo todos={tasks.filter(function (task) { return task.done == false })} handleTick={handleTaskDone} handleDelete={handleTaskDelete} />
        <Done todos={tasks.filter(function (task) { return task.done == true })} handleTick={handleTaskDone} handleDelete={handleTaskDelete} />
      </div>
    </>
  )
}

export default App
