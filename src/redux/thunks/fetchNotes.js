// src/redux/thunks/fetchNotes.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { replaceAll } from "../slices/noteSlice";

export function fetchNotes() {
  return async function(dispatch) {
    const snapshot = await getDocs(collection(db, "notes"));
    const data = snapshot.docs.map(doc => ({
      id: doc.id, // id de Firestore
      ...doc.data()
    }));
    dispatch(replaceAll(data));
  };
}
