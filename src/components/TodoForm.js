import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const [isClicked, setIsClicked] = useState({status: ''});

  const handleInputText = (event) => {
    setInputText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 10000) }]);
    setInputText('');
  };

  const handleTaskStatus = (event) => {
    setStatus(event.target.value);
    setIsClicked({status: event.target.value});
  };

  return (
    <div className='form-filter__container'>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Add a todo'
          value={inputText}
          className='todo-input'
          onChange={handleInputText}
        />
        <button className='todo-button' type='submit'> Add todo</button>
      </form>
      {todos.length > 0 
      ?
      <div className='select'>
        <button onClick={handleTaskStatus} type='button' name='filter' value='all' className={`filter-button ${isClicked.status === 'all' ? 'active' : ''}` }key='button1'> All</button>
        <button onClick={handleTaskStatus} type='button' name='filter' value='completed' className={`filter-button ${isClicked.status === 'completed' ? 'active' : ''}` }key='button2'> Completed</button>
        <button onClick={handleTaskStatus} type='button' name='filter' value='uncompleted' className={`filter-button ${isClicked.status === 'uncompleted' ? 'active' : ''}` }key='button3'> Uncompleted</button>
      </div>
      : 
      <p>Add a new todo to start planning today!🚀</p>
      }
        
    </div>
  )
}

export default TodoForm;