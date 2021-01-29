import { useState } from 'react';

import './Home.css';

export default function HomeBackgroundImage() {
  const [showDownArrow, setShowDownArrow] = useState(true);

  document.addEventListener('scroll', () => {
    setShowDownArrow(window.scrollY < 100);
  });

  function handleDownArrowClick() {
    let header = document.getElementsByClassName('site-header');
    let headerHeight = header[0].offsetHeight;
    const searchMap = document.getElementById('search-map');
    const scrollDistance = searchMap.getBoundingClientRect().top - headerHeight;
    console.log(scrollDistance);
    window.scrollBy({ top: scrollDistance, behavior: 'smooth' });
  }

  return (
    <div className='home__background-container'>
      <img
        className='home__background'
        src='./pictures/Bathroom-ocean-lng.png'
        alt='Ocean view from bathroom window'
      ></img>
      <div className='home__greeting'>
        <h1 className='home__greeting__text'>Need a toilet?</h1>
        <h1 className='home__greeting__text'>Book a toilet.</h1>
      </div>
      {showDownArrow && (
        <button
          onClick={handleDownArrowClick}
          style={{ color: 'rgba(61, 92, 104, 0.8)' }}
        >
          <i className='fas fa-chevron-down fa-3x'></i>
        </button>
      )}
    </div>
  );
}
