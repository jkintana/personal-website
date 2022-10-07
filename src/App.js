// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import React, { useState, useRef, useEffect } from "react";
import Project from "./Project/Project";

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

function App() {
  const [projectNameArray, setProjectNameArray] = useState([]);
  const projectNameInput = useRef();

  function addToProjectNameArray(e) {
    const projectName = projectNameInput.current.value;
    setProjectNameArray(projectNameArray.push(projectName));
  }

  function clearProjectNameArray(e) {
    setProjectNameArray([]);
  }

  return (
    <>
      <h1>Add a project here:</h1>
      <input ref={projectNameInput} type='text' />
      <br />
      <button onClick={ addToProjectNameArray }>Add</button>
      <button onClick={ clearProjectNameArray }>Clear</button>
      <br />
      <Project name='TESTING' />
    </>
  );
}

export default App;