// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

import React from 'react';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB582KCnKC92sag4TOFWlk_7tNH1mAK4mk',
  authDomain: 'personal-website-323f6.firebaseapp.com',
  projectId: 'personal-website-323f6',
  storageBucket: 'personal-website-323f6.appspot.com',
  messagingSenderId: '228402277857',
  appId: '1:228402277857:web:dc65944bf34bba3283f6a0',
  measurementId: 'G-8NY7WBQHEE',
  databaseURL: 'https://personal-website-323f6-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// Ideas:
// Workout Tracker
// With 2FA?
// Link Shortener
// Portfolio
// Blog
// Major Class Finder/Overlap

// Resources
// https://survivejs.com/react/introduction/
// https://codesandbox.io/s/wizardly-chaum-kbr2r?file=/src/serviceWorker.js
// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;