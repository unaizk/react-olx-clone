import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCEjWBc6FIMJcpKsuQaBybnBNFL-LEuFvk",
    authDomain: "olx-clone-e1a40.firebaseapp.com",
    projectId: "olx-clone-e1a40",
    storageBucket: "olx-clone-e1a40.appspot.com",
    messagingSenderId: "337646516051",
    appId: "1:337646516051:web:e1cf698990ddb42bec93a6",
    measurementId: "G-30WVE4FM5C"
  };

export const Firebase = firebase.initializeApp(firebaseConfig);