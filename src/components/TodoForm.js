import React from 'react';

const TodoForm = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
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
  };

  return (
    <div>
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
        <div className='select'>
          <select name='todos' className='filter-todo' onChange={handleTaskStatus}>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
          </select>
        </div>
    </div>
  )
}

export default TodoForm;