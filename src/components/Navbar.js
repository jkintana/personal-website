import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className='navbarComponent'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <a href='https://github.com/jkintana'>GitHub</a>
          </li>
        </ul>
      </div>
    </>
  )
}
