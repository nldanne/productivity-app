import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [inputText, setInputText] =useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  const saveToLocal = React.useCallback(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));

    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos)
    }
  };

  useEffect(() => {
    const handleFiltering = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    handleFiltering();
    saveToLocal();
  }, [todos, status, saveToLocal]);

  return (
    <div className="App">
      <h1>What's the plan for today?</h1>
      <TodoForm
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}  
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
