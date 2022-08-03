import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos,setTodo] = useState([])

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text) )
            return 
        setTodo([todo,...todos])
    }
    const updateTodo = (todoId,newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text) )
            return 
        setTodo(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
    }
    const removeTodo = id =>{
        const todoArr = [...todos].filter(todo => todo.id!=id)
        setTodo(todoArr)
    }
    const completeTodo = id =>{
        let updateTodo = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodo(updateTodo)
    }
    return (
        <div>
            <h1>What is your plant Today ?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo} 
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
