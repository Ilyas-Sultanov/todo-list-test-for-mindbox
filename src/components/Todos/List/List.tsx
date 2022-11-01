import Todo from '../Todo/Todo';
import { ITodo } from '../types';

interface IListProps {
  todos: Array<ITodo>
  onCheckbox: (index: number) => void
}

function List({todos, onCheckbox}: IListProps) {
  // console.log('List');
  
  return (
    <div className="todos__list" data-testid="list">
      {
        todos.map((todo, index) => {
          return (
            <Todo 
              key={todo.id}
              {...todo}
              index={index}
              onChange={onCheckbox}
            />
          )
        })
      }
    </div>
  )
}

export default List;