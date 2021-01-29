import { useState, useContext, createContext } from 'react';

import HomeBackgroundImage from './HomeBackgroundImage';
import BathroomSmallViewContainer from '../Bathroom/BathroomSmallViewContainer';
import SingleBathroom from '../Bathroom/SingleBathroom';
import MapsSearch from '../Maps/MapsSearch';
import './Home.css';

const BathroomsInWindowContext = createContext();
export const useBathroomsInWindowContext = () =>
  useContext(BathroomsInWindowContext);

export default function Home() {
  const [selectedBathroomId, setSelectedBathroomId] = useState(null);
  const [bathroomsInWindow, setBathroomsInWindow] = useState([]);

  return (
    <div>
      <BathroomsInWindowContext.Provider
        value={{ bathroomsInWindow, setBathroomsInWindow }}
      >
        <HomeBackgroundImage />
        <MapsSearch setSelectedBathroomId={setSelectedBathroomId} />
        {selectedBathroomId ? (
          <SingleBathroom propsBathroomId={selectedBathroomId} />
        ) : (
          <BathroomSmallViewContainer />
        )}
      </BathroomsInWindowContext.Provider>
    </div>
  );
}
