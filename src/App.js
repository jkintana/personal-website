// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB582KCnKC92sag4TOFWlk_7tNH1mAK4mk",
//   authDomain: "personal-website-323f6.firebaseapp.com",
//   projectId: "personal-website-323f6",
//   storageBucket: "personal-website-323f6.appspot.com",
//   messagingSenderId: "228402277857",
//   appId: "1:228402277857:web:dc65944bf34bba3283f6a0",
//   measurementId: "G-8NY7WBQHEE"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Ideas:
// Workout Tracker
// With 2FA?
// Link Shortener
// Portfolio
// Blog
// Major Class Finder/Overlap

import React from "react";
import Navbar from './Navbar/Navbar';
import Clock from './Clock/Clock';

function App() {
  return (
    <div>
      <Navbar />
      <Clock />
    </div>
  );
}

export default App;