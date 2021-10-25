import { initializeApp } from 'firebase/app';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAONLEElEsx3BraTY6Uk-S5xzt-J6182R4",
    authDomain: "netflix-1df28.firebaseapp.com",
    projectId: "netflix-1df28",
    storageBucket: "netflix-1df28.appspot.com",
    messagingSenderId: "812009637808",
    appId: "1:812009637808:web:9037b334e0f5cf32653875",
    measurementId: "G-GCF3FZ8H29"
  };
 const firebaseApp = initializeApp(firebaseConfig);
 const storage = getStorage(firebaseApp);
 
  
  export default storage
