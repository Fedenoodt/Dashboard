// src/redux/slices/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  nextId: 1
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: state.nextId,
        title: action.payload.title,
        content: action.payload.content
      });
      state.nextId += 1;
    },
    removeTask: (state, action) => {
      // action.payload es el id de la nota que queremos borrar
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    replaceAll: (state, action) => {
      // 👇 reemplaza todas las tareas por las traídas de Firestore
      state.items = action.payload;
    }

  }
});


export const { addTask, removeTask, replaceAll } = taskSlice.actions; // 🚩 acción lista para despachar
export default taskSlice.reducer; // 🚩 este reducer lo exportamos al store
