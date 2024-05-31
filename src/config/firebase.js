// Import the functions you need from the SDKs you need
import firebaseConfig from "./firestore";
import { initializeApp } from "firebase/app";
import { getAuth, getRedirectResult, signInWithRedirect, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { Firestore, addDoc, collection, getDocs, getFirestore, query, setDoc, getDoc, doc, updateDoc, deleteDoc, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getTasksByUser = (user) => {
  const tasksRef = collection(db, "tasks");
  const userRef = doc(db, "users", user.uid);
  const tasksQuery = query(tasksRef, where("user", "==", userRef));
  // console.log(tasksQuery);
  return getDocs(tasksQuery);
}

export const addTask = (new_task, user) => {
  // console.log(new_task)
  const tasksRef = collection(db, "tasks");
  const userRef = doc(db, "users", user.uid)
  return addDoc(tasksRef, { "todo": new_task.name, "priority": new_task.priority, "done": false, "do_by": new_task.do_by, "user": userRef });
}

export const updateTask = (task_id, is_done) => {
  const taskRef = doc(db, "tasks", task_id);
  return updateDoc(taskRef, { "done": is_done ? false : true });
}

export const deleteTask = (task_id) => {
  const taskRef = doc(db, "tasks", task_id);
  return deleteDoc(taskRef);
}

export const addUser = (user) => {
  const userRef = doc(db, "users", user.uid);
  return setDoc(userRef, {"email": user.email, "name": user.name});
}



