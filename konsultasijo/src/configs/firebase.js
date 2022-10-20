import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC3p8EJMgyUhpos32kb8wurb9w-zPzGtto",
  authDomain: "konsultasijo-d274e.firebaseapp.com",
  databaseURL: "https://konsultasijo-d274e-default-rtdb.firebaseio.com",
  projectId: "konsultasijo-d274e",
  storageBucket: "konsultasijo-d274e.appspot.com",
  messagingSenderId: "770080832658",
  appId: "1:770080832658:web:e735fc06c5f57d58853a4b",
  measurementId: "G-59XJ29YW30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

export default app
