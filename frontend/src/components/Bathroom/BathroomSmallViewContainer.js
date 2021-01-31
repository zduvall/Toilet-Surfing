import { useSelector } from 'react-redux';

// import components
import BathroomSmallView from './BathroomSmallView';

// import context
import { useBathroomsInWindowContext } from '../Home/index';

export default function BathroomSmallViewContainer() {
  const { users } = useSelector((state) => state);
  // const { bathrooms, users } = useSelector((state) => state);
  const { bathroomsInWindow } = useBathroomsInWindowContext();

  // const bathroomsArray = Object.values(bathrooms);

  return (
    <>
      <div
        id='bathroom-small-view-container'
        className='bathroom-small-view-container'
      >
        {bathroomsInWindow.map((bathroom) => (
          <BathroomSmallView
            key={bathroom.name}
            bathroom={bathroom}
            user={users[bathroom.bathroomOwnerId]}
          />
        ))}
      </div>
    </>
  );
}
