import React, { useState } from 'react';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import BookmarkList from './components/BookmarkList';
import RecentlyVisited from './components/RecentlyVisited';

function App() {
  const [activeTab, setActiveTab] = useState('todos');
  const [recentlyVisited, setRecentlyVisited] = useState([]);

  const handleBookmarkClick = (bookmark) => {
    setRecentlyVisited((prev) => {
      const existing = prev.find((item) => item.id === bookmark.id);
      if (existing) {
        return [existing, ...prev.filter((item) => item.id !== bookmark.id)];
      }
      const newRecentlyVisited = [bookmark, ...prev];
      return newRecentlyVisited.slice(0, 5);
    });
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">즐겨찾기 & To-do-list</h1>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'bookmarks' && <RecentlyVisited recentlyVisited={recentlyVisited} />}
        <div className="mt-4">
          <div className={activeTab === 'todos' ? '' : 'hidden'}>
            <TodoList />
          </div>
          <div className={activeTab === 'bookmarks' ? '' : 'hidden'}>
            <BookmarkList handleBookmarkClick={handleBookmarkClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;