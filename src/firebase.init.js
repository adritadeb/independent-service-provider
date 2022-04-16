// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkYwzY7SH6wMQVANcLDUJX031C8hJrh_g",
    authDomain: "independent-service-prov-35fa1.firebaseapp.com",
    projectId: "independent-service-prov-35fa1",
    storageBucket: "independent-service-prov-35fa1.appspot.com",
    messagingSenderId: "354340802388",
    appId: "1:354340802388:web:b05ba8bde8ff5ea2fb42c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;