import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurBathroomIdAction } from '../../../store/curBathroom';

// import thunk
// import { deletebathroom } from '../../../store/bathroom';

const MyBathroomsModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { session, bathrooms } = useSelector((state) => state);
  const bathroomsArray = [...Object.values(bathrooms)];
  const curUserBathrooms = bathroomsArray.filter(
    (bathroom) => bathroom.bathroomOwnerId === session.user.id
  );

  return (
    <div>
      <h1>My Bathrooms</h1>
      {!curUserBathrooms.length && <p>No toilets currently listed.</p>}
      {curUserBathrooms.map((bathroom) => {
        return (
          <div key={bathroom.id} className='myBathrooms-container'>
            <div className='myBathrooms__name-and-button'>
              <h3
                className='myBathrooms__br-name'
                onClick={(e) => {
                  dispatch(setCurBathroomIdAction(bathroom.id));
                  setShowModal(false);
                  window.scrollBy({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                  });
                  return false;
                }}
              >
                {bathroom.name}
              </h3>
              <button
                className='myBathrooms__update-button'
                onClick={() => {
                  // dispatch(deleteBathroom(bathroom.id));
                }}
              >
                Cancel
              </button>
            </div>
            <p className='myBathrooms__location'>
              {bathroom.locality}, {bathroom.administrativeArea}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MyBathroomsModal;
