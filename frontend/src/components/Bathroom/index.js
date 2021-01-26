import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './Bathroom.css';

// thunks
import { getUsers } from '../../store/user';

// components
import BathroomHeader from './BothroomHeader';

export default function Bathroom() {
  const { bathroomId } = useParams();
  const { bathrooms, users } = useSelector((state) => state);
  const curBathroom = bathrooms[bathroomId];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
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
        <p>{curBathroom.description}</p>
        <p>
          {curBathroom.streetNumber} {curBathroom.route}
        </p>
        <p>
          {curBathroom.locality}, {curBathroom.administrativeArea}
        </p>
        <p>{curBathroom.postalCode}</p>
        <p>{curBathroom.country}</p>
        <p>{curBathroom.lat}</p>
        <p>{curBathroom.lng}</p>
      </section>
    </div>
  );
}
