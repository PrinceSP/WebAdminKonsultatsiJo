// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const database = getDatabase(app);
