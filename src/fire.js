import firebase from "firebase"


  var firebaseConfig = {
    apiKey: "AIzaSyDIYmHGFtlT8hzPvkU4G884FzNoEsUfuS8",
    authDomain: "capstone-5d662.firebaseapp.com",
    projectId: "capstone-5d662",
    storageBucket: "capstone-5d662.appspot.com",
    messagingSenderId: "112701140795",
    appId: "1:112701140795:web:20cf048233290e8c36111e",
    measurementId: "G-5B8W4TT7CW"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;