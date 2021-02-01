import { useState } from 'react';

import './Home.css';

export default function HomeBackgroundImage() {
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [arrowMidScreen, setArrowMidScreen] = useState(
    window.innerWidth / 2 - 20
  );

  document.addEventListener('scroll', () => {
    setShowDownArrow(window.scrollY < 100);
  });

  window.addEventListener('resize', () => {
    setArrowMidScreen(window.innerWidth / 2 - 20);
  });

  function handleDownArrowClick() {
    let header = document.getElementsByClassName('site-header');
    let headerHeight = header[0].offsetHeight;
    const searchMap = document.getElementById('search-map');
    const scrollDistance = searchMap.getBoundingClientRect().top;
    window.scrollBy({ top: scrollDistance, behavior: 'smooth' });
  }

  return (
    <div className='home__background-container'>
      <img
        className='home__background'
        src='./pictures/Bathroom-ocean-lng.png'
        alt='Ocean view from bathroom window'
      ></img>
      {showDownArrow && (
        <div className='home__greeting' onClick={handleDownArrowClick}>
          <h1 className='home__greeting__text'>Need a toilet?</h1>
          <h1 className='home__greeting__text'>Book a toilet.</h1>
        </div>
      )}
      {showDownArrow && (
        <button id='down-arrow' onClick={handleDownArrowClick}>
          <i
            className='fas fa-chevron-down fa-3x'
            id='down-arrow'
            style={{ left: `${arrowMidScreen}px` }}
          ></i>
        </button>
      )}
    </div>
  );
}
