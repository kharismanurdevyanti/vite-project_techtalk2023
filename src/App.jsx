import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'

const DUMMY_TODO = [
  {
    id: 1,
    title: 'Belajar React',
    isCompleted: false
  }
]

function App() {
 const [todos, setTodos] = useState(DUMMY_TODO)
 const [newTodo, setNewTodo] = useState('')

 function addNewTodo() {
  const updatedTodos = [...todos]
  const objTodo = {
    id: todos.length + 1,
    title: newTodo,
    isCompleted: false
  }

  updatedTodos.push(objTodo)
  setTodos(updatedTodos)
  setNewTodo('')
 }
 return ( 
    <>
      <h1>Todo App</h1>
      <input 
        type='text'
        placeholder='Isi todo di sini' 
        value={newTodo} 
        onChange={event => setNewTodo(event.target.value)}
      />
      <button on onClick={() => addNew}>Create</button>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id} className='todo-item'>
              <input type='checkbox /> 
              {todo.title}
              </li>
          ) )
        }
      </ul>
    </>
  )
}

export default App

