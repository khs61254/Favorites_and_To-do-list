import React, { useState } from 'react';

const BookmarkList = ({ handleBookmarkClick }) => {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, name: 'Google', url: 'https://google.com', category: '검색엔진', subtitle: '검색 엔진' },
    { id: 2, name: 'Naver', url: 'https://naver.com', category: '검색엔진', subtitle: '검색 엔진' },
    { id: 3, name: 'YouTube', url: 'https://youtube.com', category: '동영상', subtitle: '동영상 서비스' },
  ]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('검색엔진');
  const [categories, setCategories] = useState(['검색엔진', '동영상']);
  const [newCategory, setNewCategory] = useState('');
  const [editingBookmark, setEditingBookmark] = useState(null);

  const addBookmark = () => {
    if (name.trim() === '' || url.trim() === '') return;
    setBookmarks([...bookmarks, { id: Date.now(), name, url, category: selectedCategory, subtitle }]);
    setName('');
    setUrl('');
    setSubtitle('');
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
            className="input-field flex-grow"
            placeholder="이름"
          />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input-field flex-grow"
            placeholder="URL"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="input-field flex-grow"
            placeholder="요약"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field flex-grow"
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
            className="input-field flex-grow"
            placeholder="새 카테고리"
          />
          <button onClick={addCategory} className="btn">
            카테고리 추가
          </button>
        </div>
        <button onClick={addBookmark} className="btn btn-primary w-full">
          추가
        </button>
      </div>
      <div>
        {Object.keys(groupedBookmarks).map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-bold mb-2">{category}</h3>
            <ul>
              {groupedBookmarks[category].map((bookmark) => (
                <li key={bookmark.id} className="flex justify-between items-center p-3 border-b border-white/10">
                  <div className="flex-grow">
                    <a
                      href={bookmark.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      onClick={() => handleBookmarkClick(bookmark)}
                    >
                      {bookmark.name}
                    </a>
                    <p className="text-sm text-white/70">{bookmark.subtitle}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => setEditingBookmark(bookmark)}
                      className="btn"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => deleteBookmark(bookmark.id)}
                      className="btn btn-danger ml-2"
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4">즐겨찾기 수정</h2>
            <input
              type="text"
              value={editingBookmark.name}
              onChange={(e) => setEditingBookmark({ ...editingBookmark, name: e.target.value })}
              className="input-field w-full mb-4"
            />
            <input
              type="text"
              value={editingBookmark.url}
              onChange={(e) => setEditingBookmark({ ...editingBookmark, url: e.target.value })}
              className="input-field w-full mb-4"
            />
            <input
              type="text"
              value={editingBookmark.subtitle || ''}
              onChange={(e) => setEditingBookmark({ ...editingBookmark, subtitle: e.target.value })}
              className="input-field w-full mb-4"
              placeholder="요약"
            />
            <div className="flex justify-end">
              <button onClick={() => setEditingBookmark(null)} className="btn mr-2">취소</button>
              <button onClick={updateBookmark} className="btn btn-primary">저장</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookmarkList;
