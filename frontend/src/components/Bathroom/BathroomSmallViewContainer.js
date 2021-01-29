import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import thunks
import { getUsers } from '../../store/user';
import { getBathrooms } from '../../store/bathroom';

// import components
import BathroomSmallView from './BathroomSmallView';

// import context
import { useBathroomsInWindowContext } from '../Home/index';

export default function BathroomSmallViewContainer() {
  const dispatch = useDispatch();
  const { bathrooms, users } = useSelector((state) => state);
  const { bathroomsInWindow } = useBathroomsInWindowContext();
  
  const bathroomsArray = Object.values(bathrooms);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getBathrooms());
  }, [dispatch]);

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
