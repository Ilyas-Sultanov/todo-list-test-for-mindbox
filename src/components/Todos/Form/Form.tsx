import { useState, ChangeEvent, memo, FormEvent } from 'react';

interface IInputProps {
  onSubmit: (value: string) => void
}

function Form({onSubmit}: IInputProps) {
  const [inputValue, setInputValue] = useState<string>('');
  // console.log('Form');

  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length < 100) {
      setInputValue(e.target.value);
    }
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  }
  
  return (
    <form className='todos__input-wrapper' onSubmit={submitHandler} data-testid="form">
      <input 
        type='text'
        className='todos__input' 
        value={inputValue} 
        placeholder='What needs to be done?'
        onChange={inputHandler}
      />
    </form>
  )
}

export default memo(Form);