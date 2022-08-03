import { useState,useEffect,useRef } from 'react'


function TodoForm(props) {
    const [input,setInput] = useState(props.edit ? props.edit.value : '')
    const inputElement= useRef()

    useEffect(() =>{
        inputElement.current.focus()
    })
    const handleSubmit = e =>{
        e.preventDefault()
        props.onSubmit({
            id:Math.floor(Math.random() *10000),
            text: input
        })
        setInput('')
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                ref={inputElement}
                type="text" 
                placeholder='Enter todo ...' 
                value={input} 
                name="text" className="todo-input"
                onChange={ e => setInput(e.target.value)}
            />
            <button className='todo-button'> Add todo</button>
        </form>
    )
}

export default TodoForm