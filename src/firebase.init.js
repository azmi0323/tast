// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYEtD3Ua1Z8vXmFPws1E4o6Z8irWoCfKE",
  authDomain: "task-2391a.firebaseapp.com",
  projectId: "task-2391a",
  storageBucket: "task-2391a.appspot.com",
  messagingSenderId: "875905784297",
  appId: "1:875905784297:web:beea2ff213923450359378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;