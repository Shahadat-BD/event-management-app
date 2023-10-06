// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB743nzZji6k5MEtERRxDwRHyDWXYoOfwI",
  authDomain: "social-event-management-d813f.firebaseapp.com",
  projectId: "social-event-management-d813f",
  storageBucket: "social-event-management-d813f.appspot.com",
  messagingSenderId: "352616239251",
  appId: "1:352616239251:web:d371562f3ff78a374d3d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app