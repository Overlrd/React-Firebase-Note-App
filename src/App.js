import { collection, onSnapshot,query , updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import React ,{useState, useEffect} from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import Todo from './Todo';
import {db} from './firebase';

//tailwind style just like bootstrap
const style = {
  bg : `h-screen w-sreen p-4 bg-gradient-to-r from-[#2F80ED]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form : `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button:`border p-4 ml-2 bg-purple-600 text-slate-100`,
  count: `text-center p-2`
}


function App() {
  //
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  //create todo

  const createTodo = async (e) =>{
    e.preventDefault(e);
    if(input === ''){
      alert('Please enter a valid input')
      return 
    }
    await addDoc(collection(db, 'todos'), {
      text : input,
      completed : false,
    })
    setInput('')

  }

  //read to form firebase
  useEffect(() =>{
    const q = query(collection(db, 'todos'))
    //call the db here
    const unsubscribe = onSnapshot(q, (QuerySnapshot) =>{
      let todoArr = []
      //extract response to an array
      QuerySnapshot.forEach((doc) => {
        todoArr.push({...doc.data(), id: doc.id})
      });
      //update todos list with the array
      setTodos(todoArr)
    } )
    return () => unsubscribe
  },[])
  //update todo in firebase

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }
  //delete todo
  const deleteTodo = async (id) =>{
    await deleteDoc(doc(db, 'todos', id))
  }


  return (
    //initial container of the app
    <div className= {style.bg} >
      <div className={style.container}>
        <h3 className={style.heading}> To Do  📝</h3>
        <form onSubmit={createTodo} className={style.form}> 
        <input  value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="add something" className={style.input} />
        <button className={style.button}>< AiOutlinePlus size={30} /> </button>

        </form>

        <ul>
          {todos.map((todo, index) =>(
                      <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ) )}
        </ul>

        {todos.length < 1 ? null : <p className={style.count}> {`You have ${todos.length} todos `} </p>
}

      </div>


    </div>
  );
}

export default App;
