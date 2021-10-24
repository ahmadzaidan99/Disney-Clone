import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvBeK9cab91b_bcU2BQgohkYlJv3ZsBMI",
  authDomain: "disney-clone-58b6c.firebaseapp.com",
  projectId: "disney-clone-58b6c",
  storageBucket: "disney-clone-58b6c.appspot.com",
  messagingSenderId: "502932049511",
  appId: "1:502932049511:web:5e3d4c9b196af03e600ec2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
