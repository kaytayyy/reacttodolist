import React, {useState} from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Katie's To Do List</h1>
      </header>
      <Form inputText = {inputText} 
      todos = {todos} 
      setTodos = {setTodos} 
      setInputText = {setInputText}
      setStatus = {setStatus}
      />
      <TodoList 
      setTodos = {setTodos} 
      todos = {todos}/>
    </div>
  );
}

export default App;
