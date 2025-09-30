import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTask } from "../redux/slices/taskSlice";
import { addTaskToFirestore } from "../redux/thunks/addTask";

function AddTask () {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    function taskRecieve (event) {
        event.preventDefault();
        if (!title.trim() && !content.trim()) return; // evita tareas vacías

        dispatch(addTaskToFirestore({ title: title.trim(), content: content.trim() }));

        // limpiar inputs después de enviar
        setTitle("");
        setContent("");
    }
    return (
        <form onSubmit={taskRecieve}>
            <label>Tìtulo de la tarea</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
            <label>Contenido</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default AddTask;