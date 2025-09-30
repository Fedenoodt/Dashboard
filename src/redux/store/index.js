// src/redux/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../slices/noteSlice';
import taskReducer from '../slices/taskSlice';
import itemsReducer from "../slices/fireSlice";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    tasks: taskReducer, // 🚩 guardamos ese pedacito de estado bajo la clave "tasks"
    items: itemsReducer
  }
});

export default store;
