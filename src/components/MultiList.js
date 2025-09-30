import React from "react";
import { useSelector } from "react-redux";

function NoteList() {
  const notes = useSelector((state) => state.notes.items);

  if (!notes.length) {
    return <p style={{ opacity: 0.7 }}>Sin notas todavía.</p>;
  }

  const sorted = [...notes].sort((a, b) => b.id - a.id);

  return (
    <ul class="sin-viñetas">
      {sorted.map((t) => (
        <li key={t.id}>
          <strong>{t.title || "(Sin título)"}</strong>
          {t.content ? ` — ${t.content}` : null}
        </li>
      ))}
    </ul>
  );
}

function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);

  if (!tasks.length) {
    return <p style={{ opacity: 0.7 }}>Sin tareas todavía.</p>;
  }

  const sorted = [...tasks].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sorted.map((t) => (
        <li key={t.id}>
          <strong>{t.title || "(Sin título)"}</strong>
          {t.content ? ` — ${t.content}` : null}
        </li>
      ))}
    </ul>
  );
}

export default function MultiList() {
  const notes = useSelector((state) => state.notes.items);
  const tasks = useSelector((state) => state.tasks.items);

  // juntamos las dos listas
  const laLista = [...notes, ...tasks];

  // ordenamos por id (más nuevo arriba)
  const sorted = [...laLista].sort((a, b) => b.id - a.id);

  if (!sorted.length) {
    return <p style={{ opacity: 0.7 }}>Sin notas ni tareas todavía.</p>;
  }

  return (
    <div>
      <h1>Muro general</h1>
      <ul>
        {sorted.map((item) => (
          <li key={item.id}>
            <strong>{item.title || "(Sin título)"}</strong>
            {item.content ? ` — ${item.content}` : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
