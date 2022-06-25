import React from 'react';

function SearchBar({ onTyping }) {
  return (
    <div className="note__search-wrapper">
      <input
        type="text"
        placeholder="Cari catatan di sini"
        onChange={onTyping}
      />
    </div>
  );
}

export default SearchBar;
