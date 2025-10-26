import React, { useState } from 'react';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import BookmarkList from './components/BookmarkList';

function App() {
  const [activeTab, setActiveTab] = useState('todos');

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">즐겨찾기 & To-do-list</h1>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-4">
          {activeTab === 'todos' ? <TodoList /> : <BookmarkList />}
        </div>
      </div>
    </div>
  );
}

export default App;