// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// analytics es opcional y solo en navegador:
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC9WVj2mvjEhKTGPiMC_jHWJHfyD03LtOI",
  authDomain: "dashboard-b8885.firebaseapp.com",
  projectId: "dashboard-b8885",
  storageBucket: "dashboard-b8885.appspot.com", // forma típica: <project>.appspot.com
  messagingSenderId: "204787064165",
  appId: "1:204787064165:web:a26301d0bb1a7b54a2d58c",
  measurementId: "G-TJVSHJSBKF"
};

const app = initializeApp(firebaseConfig);

// Firestore: exportamos la conexión que vas a usar en el resto del proyecto
export const db = getFirestore(app);

// Opcional: analytics solo si lo necesitás y estás en navegador
// let analytics;
// if (typeof window !== "undefined") {
//   try { analytics = getAnalytics(app); } catch(e) { console.warn("Analytics no iniciado:", e); }
// }
// export { analytics };

export default app;
