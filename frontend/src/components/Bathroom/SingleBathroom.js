import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Bathroom.css';

// import thunks

// import components
import BathroomHeader from './BothroomHeader';
import BathroomInfo from './BathroomInfo';
import Booking from '../Booking';

export default function Bathroom() {
  const { paramsBathroomId } = useParams();
  const { bathrooms, users, curBathroomId } = useSelector((state) => state);
  const curBathroom = bathrooms[curBathroomId || paramsBathroomId];

  return (
    <>
      {curBathroom && users[curBathroom.bathroomOwnerId] && (
        <>
          <div className='single-bathroom'>
            <section
              className='single-bathroom__image-container'
              style={{
                background: `center / cover url(${curBathroom.imageUrl})`,
              }}
            ></section>

            <section className='single-bathroom__text'>
              <BathroomHeader
                name={curBathroom.name}
                owner={users[curBathroom.bathroomOwnerId].username}
              />
              <BathroomInfo curBathroom={curBathroom} />
            </section>
          </div>
          {curBathroomId !== 1 && <Booking />}
        </>
      )}
    </>
  );
}
