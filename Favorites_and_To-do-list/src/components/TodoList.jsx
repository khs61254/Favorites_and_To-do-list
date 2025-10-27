import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 공부하기', completed: false, isImportant: false },
    { id: 2, text: 'Tailwind CSS 연습하기', completed: true, isImportant: true },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, isImportant: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleImportant = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">할 일 목록</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="새 할 일을 입력하세요"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          추가
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-3 border-b`}
          >
            <div // Outer container for checkbox and text
              className={`flex-grow cursor-pointer flex items-center`}
              onClick={() => toggleTodo(todo.id)}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                readOnly // Prevent double-toggling from label click
                className="mr-3 form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span
                style={{ fontWeight: todo.isImportant ? 'bold' : 'normal' }}
                className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.text}
              </span>
            </div>
            <div className="flex items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleImportant(todo.id);
                }}
                className={`mr-4 px-2 py-1 text-sm rounded ${
                  todo.isImportant
                    ? 'bg-yellow-400 text-white font-semibold'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                강조
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
