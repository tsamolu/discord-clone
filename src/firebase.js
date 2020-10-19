import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIDPSqgWq3vm2jxpgAcDGa_1TVKK4nw9k",
  authDomain: "discord-clone-fd670.firebaseapp.com",
  databaseURL: "https://discord-clone-fd670.firebaseio.com",
  projectId: "discord-clone-fd670",
  storageBucket: "discord-clone-fd670.appspot.com",
  messagingSenderId: "668378512559",
  appId: "1:668378512559:web:fb9c783c85b2f14923685a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestone();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
