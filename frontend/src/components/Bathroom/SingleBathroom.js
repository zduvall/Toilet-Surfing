import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './Bathroom.css';

// import thunks
import { getUsers } from '../../store/user';
import { getBathrooms } from '../../store/bathroom';
import { setCurBathroomAction } from '../../store/curBathroom';

// import components
import BathroomHeader from './BothroomHeader';
import BathroomInfo from './BathroomInfo';
import Booking from '../Booking';

export default function Bathroom({ propsBathroomId }) {
  const dispatch = useDispatch();
  const { bathroomId } = useParams();
  const { bathrooms, users } = useSelector((state) => state);
  const curSingleBathroom = bathrooms[bathroomId || propsBathroomId];

  useEffect(() => {
    dispatch(getBathrooms());
    dispatch(getUsers());
    const curBathroomPlaceHolder = bathrooms[bathroomId || propsBathroomId];
    dispatch(setCurBathroomAction(curBathroomPlaceHolder));
  }, [dispatch, bathroomId, propsBathroomId]);

  return (
    <>
      {curSingleBathroom && users[curSingleBathroom.bathroomOwnerId] && (
        <>
          <div className='single-bathroom'>
            <section
              className='single-bathroom__image-container'
              style={{
                background: `center / cover url(${curSingleBathroom.imageUrl})`,
              }}
            ></section>

            <section className='single-bathroom__text'>
              <BathroomHeader
                name={curSingleBathroom.name}
                owner={users[curSingleBathroom.bathroomOwnerId].username}
              />
              <BathroomInfo curBathroom={curSingleBathroom} />
            </section>
          </div>
          <Booking />
        </>
      )}
    </>
  );
}
