// Your firebase initial code should come here.
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN_98k6YJzLXw7mUszD_7UuV1vsm2oAA0",
  authDomain: "todo-10546.firebaseapp.com",
  projectId: "todo-10546",
  storageBucket: "todo-10546.appspot.com",
  messagingSenderId: "326475833584",
  appId: "1:326475833584:web:05f3493b2131954b7aa235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const db = getFirestore(app);