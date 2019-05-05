import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBrjRSDT17GkhEFtzyeZ51ybbVUqzstIu4",
  authDomain: "docoo-dms.firebaseapp.com",
  databaseURL: "https://docoo-dms.firebaseio.com",
  projectId: "docoo-dms",
  storageBucket: "docoo-dms.appspot.com",
  messagingSenderId: "476429755689"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
