import React from 'react';

const Topbar = ({ activeTab, setActiveTab }) => {
  const getTabClassName = (tabName) => {
    return `tab ${activeTab === tabName ? 'active' : ''}`;
  };

  return (
    <div className="tabs-container">
      <div
        className={getTabClassName('todos')}
        onClick={() => setActiveTab('todos')}
      >
        TO-DO-LIST
      </div>
      <div
        className={getTabClassName('bookmarks')}
        onClick={() => setActiveTab('bookmarks')}
      >
        즐겨찾기
      </div>
    </div>
  );
};

export default Topbar;