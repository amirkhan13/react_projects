import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { TodoContext } from './context/ToDoContext'

function App() {

  const [task, setTask] = useState('')
  const { addTodo, deleteTodo, todos } = useContext(TodoContext)

  // if (todos.length === 0) return <p>No Todos....</p>

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      return

    }

    addTodo(task)
    setTask('')
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Add a new task'
          value={task}
          onChange={((e) => setTask(e.target.value))}
        />

        <button type='submit'>ADD</button>
      </form>


      <ul>

        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.task}

              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))

        }
      </ul>



    </>
  )
}

export default App
