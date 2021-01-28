import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import thunks
import { getUsers } from '../../store/user';
import { getBathrooms } from '../../store/bathroom';

// import components
import BathroomSmallView from './BathroomSmallView';

export default function BathroomSmallViewContainer() {
  const dispatch = useDispatch();
  const { bathrooms, users } = useSelector((state) => state);
  const bathroomsArray = Object.values(bathrooms);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getBathrooms());
  }, [dispatch]);

  return (
    <>
      <h1>Bathrooms</h1>
      <div
        id='bathroom-small-view-container'
        className='bathroom-small-view-container'
      >
        {bathroomsArray.map((bathroom) => (
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
