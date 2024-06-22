// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkdKjJqoLq6CzvadWax83fMTav3c1foWM",
  authDomain: "sepatuku-26f89.firebaseapp.com",
  projectId: "sepatuku-26f89",
  storageBucket: "sepatuku-26f89.appspot.com",
  messagingSenderId: "304122416022",
  appId: "1:304122416022:web:91573d67dc176c5548abb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)