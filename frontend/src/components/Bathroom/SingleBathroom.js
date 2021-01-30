import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './Bathroom.css';

// import thunks
import { getUsers } from '../../store/user';
import { getBathrooms } from '../../store/bathroom';

// import components
import BathroomHeader from './BothroomHeader';
import BathroomInfo from './BathroomInfo';
import Booking from '../Booking';

export default function Bathroom() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBathrooms());
    dispatch(getUsers());
  }, [dispatch]);

  const { paramsBathroomId } = useParams();
  const { bathrooms, users, curBathroomId } = useSelector((state) => state);
  console.log('curBathroomId', curBathroomId);
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
          <Booking />
        </>
      )}
    </>
  );
}
