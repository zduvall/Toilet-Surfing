import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurBathroomIdAction } from '../../../store/curBathroom';
import BathroomCreateModal from '../BathroomCreateModal';

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
            <div className='myBathrooms__name-and-buttons'>
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

              <div>
                <BathroomCreateModal
                  style={{ color: 'rgb(242, 160, 84, 0.9)' }}
                  bathroomToUpdate={bathroom}
                />
                <button
                  className='myBathrooms__delete-button'
                  onClick={() => {
                    // dispatch(deleteBathroom(bathroom.id));
                  }}
                >
                  Delete
                </button>
              </div>
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
