import React from 'react'

import Navbar from '../components/Navbar';

export default function home() {
  return (
    <>
      <Navbar />
      <div className='homePage'>
        <h1>Hi, I'm Jeremy Kintana.</h1>
        <h3>
        I’m a highly driven computer science student at the University of Wisconsin-Madison, currently building skills in web development.
        <br></br>
        <br></br>
        I previously interned at AI Camp, where I created historical data reports using Python Pandas and Matplotlib, contributed to a codebase that utilized Django and PostgreSQL, and worked in a Scrum environment.
        <br></br>
        <br></br>
        At UW-Madison, I'm a member of the Data Science for Sustainable Development club and the Effective Altruism chapter. I'm passionate about educational learning theory, programming, and anything science fiction or philosophy.
        <br></br>
        <br></br>
        Let’s get connected! Message me via <a href='mailto:kintana@wisc.edu'>email</a> or <a href='https://linkedin.com/in/jkintana'>LinkedIn</a>.
        <br></br>
        <br></br>
        Note: This website is still under construction. View the code <a href='https://github.com/jkintana/personal-website'>here</a>.
        </h3>
      </div>
    </>
  )
}
