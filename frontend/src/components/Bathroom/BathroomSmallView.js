import { setCurBathroomIdAction } from '../../store/curBathroom';
import { useDispatch } from 'react-redux';

import './Bathroom.css';

export default function BathroomSmallView({ bathroom, user }) {
  const dispatch = useDispatch();
  return (
    <>
      {bathroom && user && (
        <div className='bathroom-small-view'>
          <div className='bathroom-small-view__text-container'>
            <div
              onClick={(e) => {
                dispatch(setCurBathroomIdAction(bathroom.id));
                return false;
              }}
            >
              <h1 className='bathroom-header__name bathroom-small-view__text'>
                {bathroom.name}
              </h1>
              <h2 className='bathroom-header__owner bathroom-small-view__text'>
                (by {user.username})
              </h2>
              <p className='bathroom-small-view__text'>
                {bathroom.locality}, {bathroom.administrativeArea},{' '}
                {bathroom.country}
              </p>
              {/* <p className='bathroom-small-view__text bathroom-small-view__rating'>
                Average Rating
              </p> */}
            </div>
          </div>
          <div
            className='bathroom-small-view__image-container'
            style={{ background: `center / cover url(${bathroom.imageUrl})` }}
          ></div>
        </div>
      )}
    </>
  );
}
