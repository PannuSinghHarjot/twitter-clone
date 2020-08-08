import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAN0NZazpppb-PCg5b7WCTVxVxsyRAaBcU",
    authDomain: "twitter-clone-434d4.firebaseapp.com",
    databaseURL: "https://twitter-clone-434d4.firebaseio.com",
    projectId: "twitter-clone-434d4",
    storageBucket: "twitter-clone-434d4.appspot.com",
    messagingSenderId: "915923082312",
    appId: "1:915923082312:web:93960b157079a763404c7d",
    measurementId: "G-HV3J3QJY84"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;