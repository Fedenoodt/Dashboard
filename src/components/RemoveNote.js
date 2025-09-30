import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../redux/slices/noteSlice";

function NoteList() {
  const notes = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeNote(id));
  }

  if (!notes.length) return <p style={{ opacity: 0.7 }}>Sin notas todavía.</p>;

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <strong>{note.title || "(Sin título)"}</strong>
          {note.content ? ` — ${note.content}` : null}
          <button onClick={() => handleDelete(note.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
