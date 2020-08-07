import React from 'react'
import Button from './Button'

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div 
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}  
    > 
      { Number(index+1) + '. ' + todo.text }
      <div>
        <Button 
          text={ todo.isCompleted ? 'cancel' : 'complete' } 
          size="xs" 
          isPlain="true" 
          onClick={ () => completeTodo(index) } 
        />
        <Button 
          text="X"
          size="xs"
          type="error"
          onClick={ () => removeTodo(index) } 
        />
      </div>
    </div>
  )
}

export default Todo