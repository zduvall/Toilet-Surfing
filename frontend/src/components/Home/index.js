import { useState } from 'react';

import BathroomSmallViewContainer from '../Bathroom/BathroomSmallViewContainer';
import Bathroom from '../Bathroom';
import MapsSearch from '../Maps/MapsSearch';
import './Home.css';

export default function Home() {
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [selectedBathroomId, setSelectedBathroomId] = useState(null);

  document.addEventListener('scroll', () => {
    setShowDownArrow(window.scrollY < 100);
  });
  return (
    <div>
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
            onClick={() => {
              const bathroomList = document.getElementById(
                'bathroom-small-view-container'
              );
              const rect = bathroomList.getBoundingClientRect();
              window.scrollBy({ top: rect.top, behavior: 'smooth' });
            }}
            style={{ color: 'rgba(61, 92, 104, 0.8)' }}
          >
            <i className='fas fa-chevron-down fa-3x'></i>
          </button>
        )}
      </div>
      <MapsSearch setSelectedBathroomId={setSelectedBathroomId} />
      {selectedBathroomId ? (
        <Bathroom propsBathroomId={selectedBathroomId} />
      ) : (
        <BathroomSmallViewContainer />
      )}
    </div>
  );
}
