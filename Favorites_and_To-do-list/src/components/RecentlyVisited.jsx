import React from 'react';

const RecentlyVisited = ({ recentlyVisited }) => {
  if (recentlyVisited.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-gray-700">최근에 방문한 링크</h3>
      <div className="flex gap-4 p-4 bg-gray-50 rounded-lg overflow-x-auto">
        {recentlyVisited.map((bookmark) => (
          <a
            key={bookmark.id}
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-32 h-20 p-2 bg-white border rounded-lg shadow-sm text-center flex flex-col justify-center items-center hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm font-semibold text-gray-800 truncate">{bookmark.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentlyVisited;
