import { KeyboardEvent, useRef } from 'react';
import { ITodo } from '../types';

interface ITodoProps extends ITodo {
  index: number
  onChange: (index: number) => void
}

function Todo({ title, completed, onChange, index}: ITodoProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  // console.log('Todo');

  function keyHandler(e:KeyboardEvent<HTMLLabelElement>) {
    if (e.key === 'Enter' || e.code === 'Space') {
      checkboxRef.current?.click();
    }
  }

  return (
    <div className="todos__todo todo">

      <label className='todo__label' tabIndex={0} onKeyDown={keyHandler}>
        <input 
          ref={checkboxRef}
          className='todo__input'
          type='checkbox' 
          defaultChecked={completed}
          onChange={() => onChange(index)}
        />
        <div className='todo__fake-checkbox'></div>
        <span className={`todo__text ${completed ? 'completed' : ''}`}>{title}</span>
      </label>

    </div>
  )
}

export default Todo;