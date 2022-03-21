import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiCheckbox } from 'react-icons/bi';

const Todo = ({ text, todo, todos, setTodos }) => {

  const handleDelete = () => {
    setTodos(todos.filter(element => element.id !== todo.id));   
  };

  const handleComplete = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }

      return item;
    }))
  };

  return (
    <div className='todos'>
      <BiCheckbox 
        onClick={handleComplete}
        className={`icons ${todo.completed ? 'check-on' : ''}`}
      />
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
      <RiCloseCircleLine 
        className='icons'
        onClick={handleDelete}
      />
    </div>
  );
}

export default Todo;