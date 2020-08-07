import React,  { useState }  from 'react'
import Button from './Button'

function TodoForm ({ addTodo }) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <div>
      <form className="todo-form" onSubmit={ handleSubmit }>
        <input
          type="text"
          className="input"
          placeholder="your todo thing..."
          value={ value }
          onChange={ e => setValue(e.target.value) }
        />
      </form>
      <Button text="Submit" onClick={ handleSubmit } />
    </div>
  )
}
export default TodoForm