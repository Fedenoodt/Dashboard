import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { addNote } from "../slices/noteSlice";

export function addNoteToFirestore(note) {
  return async (dispatch) => {
    try {
      // 1. escribir en Firestore
      const docRef = await addDoc(collection(db, "notes"), note);

      // 2. actualizar Redux (incluimos el id generado por Firestore)
      dispatch(addNote({ ...note, id: docRef.id }));
    } catch (e) {
      console.error("Error al agregar nota:", e);
    }
  };
}
