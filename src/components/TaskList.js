import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/slices/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeTask(id));
  }

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
          <button onClick={() => handleDelete(t.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
