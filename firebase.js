// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// const firebaseConfig = {
//    apiKey: "AIzaSyC3xFUCmxy2eEjYbrIB9-e1R2uMmTpgyPk",
//    authDomain: "paysfintechapp.firebaseapp.com",
//    projectId: "paysfintechapp",
//    storageBucket: "paysfintechapp.appspot.com",
//    messagingSenderId: "403273464397",
//    appId: "1:403273464397:web:9f94806906d0c040933a04",
//    measurementId: "G-NDG2PZL617",
// };
const firebaseConfig = {
   apiKey: "AIzaSyBvpXFnAAFGoX1a4tEdbkpd27bFGZC4GH8",
   authDomain: "halfcard-merchant.firebaseapp.com",
   projectId: "halfcard-merchant",
   storageBucket: "halfcard-merchant.appspot.com",
   messagingSenderId: "675623734963",
   appId: "1:675623734963:web:e218874a6c5655e6ffaac6",
   measurementId: "G-WBJMZB1NJG"
 };
let app;

if (firebase.apps.length === 0) {
   app = firebase.initializeApp(firebaseConfig);
} else {
   app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
