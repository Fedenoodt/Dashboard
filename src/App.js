import './App.css';
import Header from "./components/Headers";
import { Routes, Route, NavLink } from 'react-router-dom';
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import MultiList from "./components/MultiList";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { useDispatch } from "react-redux";
import { fetchNotes } from "./redux/thunks/fetchNotes"; 
import { fetchTasks } from "./redux/thunks/fetchTasks"; 

export default function App() {
  console.log("DB:", db);
  const dispatch = useDispatch();

  useEffect(() => {
    async function testFirebase() {
      try {
        const notes = await getDocs(collection(db, "notes"));
        console.log("Documentos en 'notes':", notes.docs.map(doc => doc.data()));
        const tasks = await getDocs(collection(db, "tasks"));
        console.log("Documentos en 'tasks':", tasks.docs.map(doc => doc.data()));
      } catch (err) {
        console.error("Error al conectar con Firestore:", err);
      }
    }
    testFirebase();
  }, [])
  
  useEffect(() => {
    dispatch(fetchNotes());
    dispatch(fetchTasks()); // 👈 apenas carga, va a Firebase y llena Redux
  }, [dispatch]);
  return (
    <div className="App">
      <Header />

      <nav style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: '16px 0' }}>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/tareas">Tareas</NavLink>
        <NavLink to="/crearTareas">Crear Tareas</NavLink>
        <NavLink to="/notas">Notas</NavLink>
        <NavLink to="/crearNotas">Crear Notas</NavLink>
      </nav>

      <Routes>
      
        <Route path="/tareas" element={<TaskList />} />
        <Route path="/crearTareas" element={<AddTask />} />
        <Route path="/notas" element={<NoteList />} />
        <Route path="/crearNotas" element={<AddNote />} />
        <Route path="/" element={<MultiList />} />
        <Route path="*" element={<div>404 • No encontrado</div>} />
      </Routes>
    </div>
  );
}
