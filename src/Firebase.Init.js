// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGZH312HTjngJ7iw9lUd45d3UEWa0EyPk",
  authDomain: "fir-parts-manufacturer.firebaseapp.com",
  projectId: "fir-parts-manufacturer",
  storageBucket: "fir-parts-manufacturer.appspot.com",
  messagingSenderId: "1060544228959",
  appId: "1:1060544228959:web:e2e8223ee87235a24db5ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;