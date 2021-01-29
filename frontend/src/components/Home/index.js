import { useState } from 'react';

import HomeBackgroundImage from './HomeBackgroundImage';
import BathroomSmallViewContainer from '../Bathroom/BathroomSmallViewContainer';
import Bathroom from '../Bathroom';
import MapsSearch from '../Maps/MapsSearch';
import './Home.css';

export default function Home() {
  const [selectedBathroomId, setSelectedBathroomId] = useState(null);

  return (
    <div>
      <HomeBackgroundImage />
      <MapsSearch setSelectedBathroomId={setSelectedBathroomId} />
      {selectedBathroomId ? (
        <Bathroom propsBathroomId={selectedBathroomId} />
      ) : (
        <BathroomSmallViewContainer />
      )}
    </div>
  );
}
