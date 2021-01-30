import { useState, useContext, createContext } from 'react';
// import { useSelector } from 'react-redux';

import HomeBackgroundImage from './HomeBackgroundImage';
import BathroomSmallViewContainer from '../Bathroom/BathroomSmallViewContainer';
import SingleBathroom from '../Bathroom/SingleBathroom';
import MapsSearch from '../Maps/MapsSearch';
import './Home.css';

const BathroomsInWindowContext = createContext();

export const useBathroomsInWindowContext = () =>
  useContext(BathroomsInWindowContext);

export default function Home() {
  const [bathroomsInWindow, setBathroomsInWindow] = useState([]);
  const [bathroomClicked, setBathroomClicked] = useState(false);
  // const { curBathroomId } = useSelector((state) => state);

  return (
    <div>
      <BathroomsInWindowContext.Provider
        value={{ bathroomsInWindow, setBathroomsInWindow }}
      >
        <HomeBackgroundImage />
        <MapsSearch setBathroomClicked={setBathroomClicked} />
        {bathroomClicked ? <SingleBathroom /> : <BathroomSmallViewContainer />}
      </BathroomsInWindowContext.Provider>
    </div>
  );
}
