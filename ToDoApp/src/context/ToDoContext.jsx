import { createContext , useState } from "react";


export const TodoContext = createContext();

export const TodoProvider =({children})=>{
    const [todos , setTodos] = useState([]);

    const addTodo = (task)=>{
        setTodos([...todos ,{id:Date.now() , task }])
    }

    const deleteTodo =(id)=>{
        setTodos(
            todos.filter(todo =>todo.id !=id)
        )
    }

    
    return (
        <TodoContext.Provider value={{todos, setTodos,addTodo , deleteTodo}}>

            {children}
        </TodoContext.Provider>
    )
}