import React from "react";
import {FiTrash2} from 'react-icons/fi'

const style = {
    li:`flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row:`flex `,
    text:`ml-2 cursor-pointer` ,
    textComplete : `ml-2 cursor-pointer line-trough`,
    button:`cursor-pointer flex items-center`
} 

const Todo = ({todo, toggleComplete, deleteTodo }) =>  {
    return (
        <li className={todo.completed ? style.liComplete : style.li}>
            <div className={style.raw}>
                <input onChange={() => toggleComplete(todo)} type="checkbox" checked = {todo.completed ? 'checked' : ''} />
                <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text} </p>
            </div>
            <button onClick={() => deleteTodo(todo.id) }> <FiTrash2 size={30}/> </button>
        </li>
    )
}

export default Todo 