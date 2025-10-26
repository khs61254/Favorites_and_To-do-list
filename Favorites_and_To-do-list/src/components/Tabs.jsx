import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabStyles = 'py-2 px-4 font-semibold';
  const activeTabStyles = 'border-b-4 border-blue-500 text-blue-600';
  const inactiveTabStyles = 'text-gray-500';

  return (
    <div className="flex justify-center border-b mb-8">
      <button
        className={`${tabStyles} ${activeTab === 'todos' ? activeTabStyles : inactiveTabStyles}`}
        onClick={() => setActiveTab('todos')}
      >
        To-do-list
      </button>
      <button
        className={`${tabStyles} ${activeTab === 'bookmarks' ? activeTabStyles : inactiveTabStyles}`}
        onClick={() => setActiveTab('bookmarks')}
      >
        즐겨찾기
      </button>
    </div>
  );
};

export default Tabs;
