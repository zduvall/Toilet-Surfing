import BathroomHeader from './BothroomHeader';

import './Bathroom.css';

export default function BathroomSmallView({ bathroom, user }) {
  return (
    <div
      className='bathroom-small-view'
      style={{ background: `center / cover url(${bathroom.imageUrl})` }}
    >
      <a href={`/bathrooms/${bathroom.id}`}>
        {<BathroomHeader name={bathroom.name} owner={user.username} />}
      </a>
      <p>
        {bathroom.locality}, {bathroom.administrativeArea}, {bathroom.country}
      </p>
    </div>
  );
}
