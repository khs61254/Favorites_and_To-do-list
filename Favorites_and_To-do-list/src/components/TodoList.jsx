import React, { useState, useEffect } from 'react';
import StarIcon from '../icons/StarIcon';
import EmptyStarIcon from '../icons/EmptyStarIcon';

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
  }, [autoDelete, todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, isImportant: false, details: '' }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    if (autoDelete && todos.find(todo => todo.id === id && !todo.completed)) {
      setTimeout(() => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      }, 500);
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
      <h2 className="text-3xl font-bold mb-6 text-center">할 일 목록</h2>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="input-field flex-grow"
          placeholder="새 할 일을 입력하세요"
        />
        <button onClick={addTodo} className="btn btn-primary">
          추가
        </button>
        <button onClick={clearTodos} className="btn btn-danger">
          비우기
        </button>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="auto-delete"
          checked={autoDelete}
          onChange={() => setAutoDelete(!autoDelete)}
          className="h-5 w-5 rounded cursor-pointer"
        />
        <label htmlFor="auto-delete" className="ml-3 block text-md cursor-pointer">
          완료 항목 자동 삭제
        </label>
      </div>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-item flex items-center"
          >
            {editingId === todo.id ? (
              <div className="flex-grow flex items-center">
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="input-field flex-grow"
                />
                <button onClick={() => saveTodo(todo.id)} className="btn btn-primary ml-2">
                  저장
                </button>
                <button onClick={cancelEditing} className="btn ml-2">
                  취소
                </button>
              </div>
            ) : (
              <>
                <div
                  className={`flex-grow cursor-pointer flex items-center`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    className="mr-4 h-6 w-6 rounded cursor-pointer"
                  />
                  <div className="relative group"
                    onDoubleClick={() => startDetailsEditing(todo.id, todo.details)}>
                    <span
                      className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
                    {todo.details && (
                      <div className="details-tooltip">
                        <p className="text-sm">{todo.details}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleImportant(todo.id);
                    }}
                    className="icon-btn"
                  >
                    {todo.isImportant ? <StarIcon className="star-icon important" /> : <EmptyStarIcon className="star-icon not-important" />}
                  </button>
                  <button
                    onClick={() => startEditing(todo.id, todo.text)}
                    className="btn"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-danger"
                  >
                    삭제
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {detailsEditingId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="card p-6">
            <h3 className="text-lg font-bold mb-4">상세 정보 수정</h3>
            <textarea
              value={detailsEditingText}
              onChange={(e) => setDetailsEditingText(e.target.value)}
              className="input-field w-full"
              rows="4"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => saveDetails(detailsEditingId)}
                className="btn btn-primary"
              >
                저장
              </button>
              <button
                onClick={cancelDetailsEditing}
                className="btn"
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
