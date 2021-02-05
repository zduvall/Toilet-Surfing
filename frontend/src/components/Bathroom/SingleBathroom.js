import { useSelector } from 'react-redux';
import './Bathroom.css';

// import components
import BathroomHeader from './BothroomHeader';
import BathroomInfo from './BathroomInfo';
import Booking from '../Booking';
import FavoriteStar from '../FavoriteStar';

export default function Bathroom() {
  const { bathrooms, users, curBathroomId } = useSelector((state) => state);
  const curBathroom = bathrooms[curBathroomId];

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
              {curBathroom.id !== 1 && (
                <div className='fav-star-container'>
                  <FavoriteStar />
                </div>
              )}
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
