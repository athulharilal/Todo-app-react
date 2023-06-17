import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
  {todos.map((item) => (
    <div className="todo" key={item.id}>
      <div className="left">
        <input
          onChange={(e) => {
            console.log(e.target.checked);
            console.log(item);
            setTodos((prevTodos) =>
              prevTodos.map((todo) =>
                todo.id === item.id ? { ...todo, status: e.target.checked } : todo
              )
            );
          }}
          value={item.status}
          type="checkbox"
          name=""
          id=""
        />
        <p>{item.text}</p>
      </div>
      <div className="right">
        <i className="fas fa-times" onClick={() => removeTodo(item.id)}></i>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default App;
