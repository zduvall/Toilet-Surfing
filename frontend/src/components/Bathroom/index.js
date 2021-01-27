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

export default function Bathroom() {
  const dispatch = useDispatch();
  const { bathroomId } = useParams();
  const { bathrooms, users } = useSelector((state) => state);
  const curBathroom = bathrooms[bathroomId];

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getBathrooms());
  }, [dispatch]);

  return (
    <>
      {curBathroom && (
        <div className='single-bathroom'>
          <section className='single-bathroom__image-container'>
            <img
              className='single-bathroom__image'
              src={curBathroom.picture}
              alt={'bathroom'}
            />
          </section>

          <section className='single-bathroom__text'>
            <BathroomHeader
              name={curBathroom.name}
              owner={users[curBathroom.bathroomOwnerId].username}
            />
            <BathroomInfo curBathroom={curBathroom} />
          </section>
        </div>
      )}
    </>
  );
}
