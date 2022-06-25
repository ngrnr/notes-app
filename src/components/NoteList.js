import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ list, deleteNote, archiveNote }) {
  if (list.length) {
    return (
      <div className="note__list">
        {list.map((item) => (
          <NoteItem
            note={item}
            key={item.id}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
          />
        ))}
      </div> 
    );
  }

  return <p>Belum Ada Catatan.</p>;
}

export default NoteList;
