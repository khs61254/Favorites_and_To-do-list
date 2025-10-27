import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 공부하기', completed: false, isImportant: false, details: 'React의 기본 개념과 훅에 대해 학습합니다.' },
    { id: 2, text: 'Tailwind CSS 연습하기', completed: true, isImportant: true, details: 'Tailwind CSS를 사용하여 반응형 웹 디자인을 연습합니다.' },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [autoDelete, setAutoDelete] = useState(false);
  const [detailsEditingId, setDetailsEditingId] = useState(null);
  const [detailsEditingText, setDetailsEditingText] = useState('');

  useEffect(() => {
    if (autoDelete) {
      setTodos(todos.filter(todo => !todo.completed));
    }
  }, [autoDelete]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, isImportant: false, details: '' }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    if (autoDelete) {
      setTodos(todos.filter(todo => todo.id !== id));
    } else {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
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

  const clearTodos = () => {
    setTodos([]);
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingText('');
  };

  const saveTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    cancelEditing();
  };

  const startDetailsEditing = (id, details) => {
    setDetailsEditingId(id);
    setDetailsEditingText(details);
  };

  const cancelDetailsEditing = () => {
    setDetailsEditingId(null);
    setDetailsEditingText('');
  };

  const saveDetails = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, details: detailsEditingText } : todo
      )
    );
    cancelDetailsEditing();
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
        <button
          onClick={clearTodos}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          비우기
        </button>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={autoDelete}
          onChange={() => setAutoDelete(!autoDelete)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="auto-delete" className="ml-2 block text-sm text-gray-900">
          완료 항목 자동 삭제
        </label>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`group relative flex justify-between items-center p-3 border-b`}
          >
            {editingId === todo.id ? (
              <div className="flex-grow flex items-center">
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="flex-grow p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={() => saveTodo(todo.id)}
                  className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  저장
                </button>
                <button
                  onClick={cancelEditing}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  취소
                </button>
              </div>
            ) : (
              <>
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
                    className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
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
                    onClick={() => startEditing(todo.id, todo.text)}
                    className="mr-2 text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => startDetailsEditing(todo.id, todo.details)}
                    className="mr-2 text-gray-500 hover:text-gray-700 font-semibold"
                  >
                    상세
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    삭제
                  </button>
                </div>
                {todo.details && (
                  <div className="absolute left-0 top-full mt-2 w-full p-2 bg-gray-100 border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-gray-700">{todo.details}</p>
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
      {detailsEditingId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h3 className="text-lg font-bold mb-4">상세 정보 수정</h3>
            <textarea
              value={detailsEditingText}
              onChange={(e) => setDetailsEditingText(e.target.value)}
              className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => saveDetails(detailsEditingId)}
                className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600"
              >
                저장
              </button>
              <button
                onClick={cancelDetailsEditing}
                className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;

