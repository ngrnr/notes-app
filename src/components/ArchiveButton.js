import React from 'react';

function ArchiveButton({ archived, onClick }) {
  return (
    <button className="warning" onClick={onClick}>
      {archived ? 'Buka Arsip' : 'Arsipkan'}
    </button>
  );
}

export default ArchiveButton;
