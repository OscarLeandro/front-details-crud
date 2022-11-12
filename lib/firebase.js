// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//PASAR CADA UNO A UN .ENV
const firebaseConfig = {
  apiKey: "AIzaSyAwMT3OdG99iwm80uI0EZ4RFBGbEH-rQpw",
  authDomain: "authentication-exercise-3ed46.firebaseapp.com",
  projectId: "authentication-exercise-3ed46",
  storageBucket: "authentication-exercise-3ed46.appspot.com",
  messagingSenderId: "128088401324",
  appId: "1:128088401324:web:c088ae799861857ab1c609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);