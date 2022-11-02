import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyChZia2gn-rKD7A5sndBqD0iy4pTK7-xds",
    authDomain: "reddit-clone-e81fb.firebaseapp.com",
    projectId: "reddit-clone-e81fb",
    storageBucket: "reddit-clone-e81fb.appspot.com",
    messagingSenderId: "963775029563",
    appId: "1:963775029563:web:fb298e4e9f2a675469971e"
  };


  const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };