import React from 'react'

import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div class='errorPage'>
        <iframe
        class="h_iframe"
        frameborder="0"
        allowfullscreen
        src="https://www.youtube.com/embed/GY8PkikQ8ZE?autoplay=1&mute=1">
        </iframe>
      </div>
    </>
  )
}
