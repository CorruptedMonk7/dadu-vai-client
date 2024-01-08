// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
    apiKey: "AIzaSyBuoh05Bn9gDw715dGn_Tzv88F-aJtybis",
    authDomain: "dadu-vai.firebaseapp.com",
    projectId: "dadu-vai",
    storageBucket: "dadu-vai.appspot.com",
    messagingSenderId: "79323421426",
    appId: "1:79323421426:web:2c5590bfe59cafe021ce6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;