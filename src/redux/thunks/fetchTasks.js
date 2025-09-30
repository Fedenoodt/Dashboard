// src/redux/thunks/fetchTasks.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { replaceAll } from "../slices/taskSlice";

export function fetchTasks() {
  return async function(dispatch) {
    const snapshot = await getDocs(collection(db, "tasks"));
    const data = snapshot.docs.map(doc => ({
      id: doc.id, // id de Firestore
      ...doc.data()
    }));
    dispatch(replaceAll(data));
  };
}
