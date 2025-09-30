import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { addTask } from "../slices/taskSlice";

export function addTaskToFirestore(task) {
  return async (dispatch) => {
    try {
      // 1. escribir en Firestore
      const docRef = await addDoc(collection(db, "tasks"), task);

      // 2. actualizar Redux (incluimos el id generado por Firestore)
      dispatch(addTask({ ...task, id: docRef.id }));
    } catch (e) {
      console.error("Error al agregar tarea:", e);
    }
  };
}
