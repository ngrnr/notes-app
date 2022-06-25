import React from "react";

function DeleteButton({ onClick }) {
  return (
    <button className="danger" onClick={onClick}>
      Hapus
    </button>
  );
}

export default DeleteButton;
