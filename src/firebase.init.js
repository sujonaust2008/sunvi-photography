// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY1VQaKWICI9lh3ROBHsI5qPYaZVpDI7I",
  authDomain: "sunvi-photography.firebaseapp.com",
  projectId: "sunvi-photography",
  storageBucket: "sunvi-photography.appspot.com",
  messagingSenderId: "235123947169",
  appId: "1:235123947169:web:4c2ea1607cbc3ff393a2e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;