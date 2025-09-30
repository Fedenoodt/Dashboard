// src/redux/slices/noteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  nextId: 1
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.items.push({
        id: state.nextId,
        title: action.payload.title,
        content: action.payload.content
      });
      state.nextId += 1;
    },
    removeNote: (state, action) => {
      // action.payload es el id de la nota que queremos borrar
      state.items = state.items.filter(note => note.id !== action.payload);
    },
    replaceAll: (state, action) => {
      // 👇 reemplaza todas las notas por las traídas de Firestore
      state.items = action.payload;
    }

  }
});


export const { addNote, removeNote, replaceAll } = noteSlice.actions; // 🚩 acción lista para despachar
export default noteSlice.reducer; // 🚩 este reducer lo exportamos al store
