import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf0jv3cEXbATP97JpnzJEYi8VyZpiSeVY",
  authDomain: "fir-c5f8b.firebaseapp.com",
  databaseURL: "https://fir-c5f8b.firebaseio.com",
  projectId: "fir-c5f8b",
  storageBucket: "fir-c5f8b.appspot.com",
  messagingSenderId: "403438793501",
  appId: "1:403438793501:web:626df55854d13878f467f4",
  measurementId: "G-CC0TE4XM4Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
