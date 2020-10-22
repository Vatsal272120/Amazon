import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4aDrHxqDpD94uCJr0vnHsrhqkSNKVktU",
  authDomain: "fir-33ce1.firebaseapp.com",
  databaseURL: "https://fir-33ce1.firebaseio.com",
  projectId: "fir-33ce1",
  storageBucket: "fir-33ce1.appspot.com",
  messagingSenderId: "727843532377",
  appId: "1:727843532377:web:ca6ab2bd92cec49cb28b48",
  measurementId: "G-H9D79N8JVN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
