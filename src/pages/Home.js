import React from 'react'

import Navbar from '../components/Navbar';

export default function home() {
  return (
    <>
      <Navbar />
      <div className='homePage'>
        <h1>Hi, I'm Jeremy Kintana.</h1>
        <h3>
        I’m a driven computer science student at the University of Wisconsin-Madison, currently building skills in web development.
        <br></br>
        <br></br>
        Previously, I interned at AI Camp, where I created historical data reports using Python Pandas and Matplotlib, and worked on a codebase that utilized React, Django, and PostgreSQL.
        <br></br>
        <br></br>
        I'm passionate about educational learning theory, programming, and anything science fiction or philosophy.
        <br></br>
        <br></br>
        Let’s get connected! Message me at kintana@wisc.edu or at linkedin.com/in/jkintana.
        <br></br>
        <br></br>
        Note: This website is still under construction. View the code <a href='https://github.com/jkintana/personal-website'>here</a>.
        </h3>
      </div>
    </>
  )
}
