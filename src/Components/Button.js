import React from 'react'

function Button({ text, size="lg", type="primary", isFull, isRound, isPlain, isDisabled="false", isError="false", onClick }){
  const sizeClass = () => 'button--' + size
  const typeClass = () => 'button--' + type
  const fullClass = () => isFull ? 'is-full' : ''
  const roundClass = () => isRound ? 'is-round' : ''
  const plainClass = () => isPlain ? 'is-plain' : ''

  return (
    <button
    className={ ['button '+sizeClass()+' '+typeClass()+' '+fullClass()+' '+roundClass()+' '+plainClass()] }
    data-is-disabled={ isDisabled }
    data-is-error={ isError }
    onClick={ onClick }
    >
      { text }
    </button>
  )
}

export default Button