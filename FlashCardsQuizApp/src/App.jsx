import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const flashCards = [
    {
    "id":1,
    "question": "What does HTML stand for?",
    "answer": "HyperText Markup Language"
  },
  {
    "id":2,
    "question": "What does CSS stand for?",
    "answer": "Cascading Style Sheets"
  },
  {
    "id":3,
    "question": "What is React?",
    "answer": "A JavaScript library for building user interfaces"
  },
  {
    "id":4,
    "question": "What is the use of useState in React?",
    "answer": "It is a React Hook that allows you to manage state in a functional component"
  },
  {
    "id":5,
    "question": "What does JSX stand for?",
    "answer": "JavaScript XML"
  },
  {
    "id":6,
    "question": "What is the difference between == and === in JavaScript?",
    "answer": "== compares values with type conversion, while === compares values without type conversion"
  },
  {
    "id":7,
    "question": "What is Node.js?",
    "answer": "A JavaScript runtime built on Chrome's V8 engine"
  },
  {
    "id":8,
    "question": "What is npm used for?",
    "answer": "Node Package Manager, used to install and manage dependencies in a project"
  },
  {
    "id":9,
    "question": "What is an API?",
    "answer": "Application Programming Interface, a set of rules that allow software programs to communicate with each other"
  },
  {
    "id":10,
    "question": "What is Git used for?",
    "answer": "Version control system to track changes in code and collaborate with others"
  }
  ]

    const [showAnswer , setShowAnwser] = useState(null);



  return (
    <>
      <div className="flash-container">
        {
          flashCards.map((quiz)=>(

        <div 
        key={quiz.id}
        onClick={()=>setShowAnwser(quiz.id)}
        onMouseLeave={() =>setShowAnwser(null)} 
        className={`flash-cards ${showAnswer===quiz.id ?"flipped" :""}`}
        >

          {showAnswer===quiz.id ? quiz.answer : quiz.question}
        </div>

          ))
        }
          
      </div>
    </>
  )
}

export default App
