import { useState, useContext, createContext } from 'react';
import { useSelector } from 'react-redux';

// import components
import HomeBackgroundImage from './HomeBackgroundImage';
import MapsSearch from '../Maps/MapsSearch';
import BathroomSmallViewContainer from '../Bathroom/BathroomSmallViewContainer';
import SingleBathroom from '../Bathroom/SingleBathroom';
import Footer from '../Footer';

// import css
import './Home.css';

// create context
const BathroomsInWindowContext = createContext();
export const useBathroomsInWindowContext = () =>
  useContext(BathroomsInWindowContext);

export default function Home() {
  const [bathroomsInWindow, setBathroomsInWindow] = useState([]);
  const { curBathroomId } = useSelector((state) => state);

  return (
    <div>
      <BathroomsInWindowContext.Provider
        value={{ bathroomsInWindow, setBathroomsInWindow }}
      >
        <HomeBackgroundImage />
        <MapsSearch />
        {curBathroomId ? <SingleBathroom /> : <BathroomSmallViewContainer />}
      </BathroomsInWindowContext.Provider>
      <Footer />
    </div>
  );
}
