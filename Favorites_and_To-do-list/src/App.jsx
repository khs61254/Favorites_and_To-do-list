import React, { useState } from 'react';
import Topbar from './components/Topbar';
import TodoList from './components/TodoList';
import BookmarkList from './components/BookmarkList';
import './ModernDesign.css';

function App() {
  const [activeTab, setActiveTab] = useState('todos');

  return (
    <div className="app-container">
      <div className="card">
        <Topbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          <div className={activeTab === 'todos' ? '' : 'hidden'}>
            <TodoList />
          </div>
          <div className={activeTab === 'bookmarks' ? '' : 'hidden'}>
            <BookmarkList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
