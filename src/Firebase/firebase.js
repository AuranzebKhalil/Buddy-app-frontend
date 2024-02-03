import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


  const firebaseConfig = {
    apiKey: "AIzaSyDtftEl8yiidLsZldrw9IE-dtEcDukzm7A",
    authDomain: "django-18a27.firebaseapp.com",
    projectId: "django-18a27",
    storageBucket: "django-18a27.appspot.com",
    messagingSenderId: "93895407098",
    appId: "1:93895407098:web:fa95017eb3f9a33a752043",
    measurementId: "G-TMWF3R6685"
  };

 const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
 const storage = getStorage(app);


export { app, storage };