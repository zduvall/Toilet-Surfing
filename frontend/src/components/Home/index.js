import { useState } from 'react';

import HomeBackgroundImage from './HomeBackgroundImage';
import BathroomSmallViewContainer from '../Bathroom/BathroomSmallViewContainer';
import SingleBathroom from '../Bathroom/SingleBathroom';
import MapsSearch from '../Maps/MapsSearch';
import './Home.css';

export default function Home() {
  const [selectedBathroomId, setSelectedBathroomId] = useState(null);

  return (
    <div>
      <HomeBackgroundImage />
      <MapsSearch setSelectedBathroomId={setSelectedBathroomId} />
      {selectedBathroomId ? (
        <SingleBathroom propsBathroomId={selectedBathroomId} />
      ) : (
        <BathroomSmallViewContainer />
      )}
    </div>
  );
}
