import React, { useState } from 'react';

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, name: 'Google', url: 'https://google.com' },
    { id: 2, name: 'Naver', url: 'https://naver.com' },
  ]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const addBookmark = () => {
    if (name.trim() === '' || url.trim() === '') return;
    setBookmarks([...bookmarks, { id: Date.now(), name, url }]);
    setName('');
    setUrl('');
  };

  const deleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">즐겨찾기 목록</h2>
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-grow p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="이름"
            />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-grow p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="URL"
            />
        </div>
        <button
          onClick={addBookmark}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          추가
        </button>
      </div>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id} className="flex justify-between items-center p-3 border-b">
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex-grow"
            >
              {bookmark.name}
            </a>
            <button
              onClick={() => deleteBookmark(bookmark.id)}
              className="text-red-500 hover:text-red-700 font-semibold ml-4"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;
