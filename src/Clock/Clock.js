import React from 'react'

function Clock()  {
  let currentTime = (Date.now() - Date.parse('2004-07-05')) / 31556952000;
  currentTime = currentTime.toFixed(10);

  return (
    <div class="clock">
      <h1>Jeremy is {currentTime} years old.</h1>
    </div>
  )
}

export default Clock;