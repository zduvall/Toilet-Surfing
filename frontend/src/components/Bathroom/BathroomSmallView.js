import BathroomHeader from './BothroomHeader';

import './Bathroom.css';

export default function BathroomSmallView({ bathroom, user }) {
  return (
    <>
      {bathroom && user && (
        <div className='bathroom-small-view'>
          <div className='bathroom-small-view__text-container'>
            <a href={`/bathrooms/${bathroom.id}`}>
              <h1 className='bathroom-header__name bathroom-small-text'>
                {bathroom.name}
              </h1>
              <h2 className='bathroom-header__owner bathroom-small-text'>
                (by {user.username})
              </h2>
              <p className='bathroom-small-text'>
                {bathroom.locality}, {bathroom.administrativeArea},{' '}
                {bathroom.country}
              </p>
              <p className='bathroom-small-text'>Average Rating</p>
            </a>
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
