import './todos.scss';
import { useState, useCallback } from 'react';
import { v4 } from 'uuid';
import { ITodo } from './types';
import Form from './Form/Form';
import List from './List/List';
import Footer from './Footer/Footer';

function Todos() {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [visibleStatus, setVisibleStatus] = useState<number | undefined>();

  const addHandler = useCallback(
    function(value: string) {
      setTodos((prev) => {
        const newTodos = [{id: v4(), title: value, completed: false}, ...prev];
        return newTodos;
      })
    },
    []
  );

  const checkboxHandler = useCallback(
    function(index: number) {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    },
    [todos]
  )
  
  function statusHandler(status?: number) {
    setVisibleStatus(status);
  }
   
  function clearHandler() {
    setTodos((prev) => {
      const newTodos = [...prev].filter((item) => !item.completed);
      return newTodos;
    });
  }
    
  function getTargetTodos() {
    let targetTodos: Array<ITodo> = [];
    if (visibleStatus === 0) {
      targetTodos = todos.filter((item) => !item.completed);
    }
    else if (visibleStatus === 1) {
      targetTodos = todos.filter((item) => item.completed);
    }
    else {
      targetTodos = todos;
    }
    return targetTodos;
  }
  
  return (
    <div className="todos">
      <Form onSubmit={addHandler}/>
      
      <List 
        todos={getTargetTodos()}
        onCheckbox={checkboxHandler}
      />

      <Footer
        visibleStatus={visibleStatus}
        totalCount={todos.length}
        completedCount={todos.filter((item) => item.completed).length}
        onChangeVisibleStatus={statusHandler}
        onClear={clearHandler}
      />
    </div>
  )
}

export default Todos;