import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../redux/slices/noteSlice";

function NoteList() {
  const notes = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeNote(id));
  }

  if (!notes.length) {
    return <p style={{ opacity: 0.7 }}>Sin notas todavía.</p>;
  }

  const sorted = [...notes].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sorted.map((t) => (
        <li key={t.id}>
          <strong>{t.title || "(Sin título)"}</strong>
          {t.content ? ` — ${t.content}` : null}
          <button onClick={() => handleDelete(t.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
