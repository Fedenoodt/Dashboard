import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addNote } from "../redux/slices/noteSlice";
import { addNoteToFirestore } from "../redux/thunks/addNote";

function AddNote () {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    function NoteRecieve (event) {
        event.preventDefault();
        if (!title.trim() && !content.trim()) return; // evita tareas vacías

        dispatch(addNoteToFirestore({ title: title.trim(), content: content.trim() }));

        // limpiar inputs después de enviar
        setTitle("");
        setContent("");
    }
    return (
        <form onSubmit={NoteRecieve}>
            <label>Tìtulo de la nota</label>
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

export default AddNote;