import React, { useState } from 'react';

const BookmarkList = ({ handleBookmarkClick }) => {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, name: 'Google', url: 'https://google.com', category: '검색엔진' },
    { id: 2, name: 'Naver', url: 'https://naver.com', category: '검색엔진' },
    { id: 3, name: 'YouTube', url: 'https://youtube.com', category: '동영상' },
  ]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('검색엔진');
  const [categories, setCategories] = useState(['검색엔진', '동영상']);
  const [newCategory, setNewCategory] = useState('');
  const [editingBookmark, setEditingBookmark] = useState(null);

  const addBookmark = () => {
    if (name.trim() === '' || url.trim() === '') return;
    setBookmarks([...bookmarks, { id: Date.now(), name, url, category: selectedCategory }]);
    setName('');
    setUrl('');
  };

  const deleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  const updateBookmark = () => {
    if (!editingBookmark || editingBookmark.name.trim() === '' || editingBookmark.url.trim() === '') return;
    setBookmarks(bookmarks.map((b) => (b.id === editingBookmark.id ? editingBookmark : b)));
    setEditingBookmark(null);
  };

  const addCategory = () => {
    if (newCategory.trim() === '' || categories.includes(newCategory.trim())) return;
    setCategories([...categories, newCategory.trim()]);
    setNewCategory('');
  };

  const groupedBookmarks = bookmarks.reduce((acc, bookmark) => {
    if (!acc[bookmark.category]) {
      acc[bookmark.category] = [];
    }
    acc[bookmark.category].push(bookmark);
    return acc;
  }, {});

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
        <div className="flex gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="flex-grow p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="flex-grow p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="새 카테고리"
          />
          <button
            onClick={addCategory}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            카테고리 추가
          </button>
        </div>
        <button
          onClick={addBookmark}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          추가
        </button>
      </div>
      <div>
        {Object.keys(groupedBookmarks).map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-gray-700">{category}</h3>
            <ul>
              {groupedBookmarks[category].map((bookmark) => (
                <li key={bookmark.id} className="flex justify-between items-center p-3 border-b">
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex-grow"
                    onClick={() => handleBookmarkClick(bookmark)}
                  >
                    {bookmark.name}
                  </a>
                  <div className="flex items-center">
                    <button
                      onClick={() => setEditingBookmark(bookmark)}
                      className="text-blue-500 hover:text-blue-700 font-semibold mr-4"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => deleteBookmark(bookmark.id)}
                      className="text-red-500 hover:text-red-700 font-semibold ml-4"
                    >
                      삭제
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {editingBookmark && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">즐겨찾기 수정</h2>
            <input
              type="text"
              value={editingBookmark.name}
              onChange={(e) => setEditingBookmark({ ...editingBookmark, name: e.target.value })}
              className="w-full p-2 border rounded-md mb-4"
            />
            <input
              type="text"
              value={editingBookmark.url}
              onChange={(e) => setEditingBookmark({ ...editingBookmark, url: e.target.value })}
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-end">
              <button onClick={() => setEditingBookmark(null)} className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2">취소</button>
              <button onClick={updateBookmark} className="bg-blue-500 text-white px-4 py-2 rounded-md">저장</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookmarkList;