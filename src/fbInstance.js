import * as firebase from "firebase/app"//initializeApp 필요해서 임포트 하는데 그냥 깔끔하게 app안에 있는거 전부 임포트 한다.
import * as auth from "firebase/auth";//로그인 할때 필요한데 그냥 다 임포트 한다.

//import { initializeApp } from "firebase/app"; 이걸로 했었지만 지저분하다.



// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGEIN_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyDr9U6QU_LlSwmsNjvfY4xgolctgBY59uU",
    authDomain: "nwitter-42dcd.firebaseapp.com",
    projectId: "nwitter-42dcd",
    storageBucket: "nwitter-42dcd.appspot.com",
    messagingSenderId: "478711380670",
    appId: "1:478711380670:web:2b040e8f9e2dc59fe0bcef"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = auth;
