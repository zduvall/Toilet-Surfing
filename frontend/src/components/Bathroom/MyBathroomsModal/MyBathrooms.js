import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurBathroomIdAction } from '../../../store/curBathroom';

// import store items
import { getBathrooms } from '../../../store/bathroom';

// import components
import BathroomCreateModal from '../BathroomCreateModal';

// import thunk
import { deleteBathroom } from '../../../store/bathroom';

const MyBathroomsModal = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const { session, bathrooms } = useSelector((state) => state);
  const bathroomsArray = [...Object.values(bathrooms)];
  const curUserBathrooms = bathroomsArray.filter(
    (bathroom) => bathroom.bathroomOwnerId === session.user.id
  );

  // trigger get all bathrooms
  useEffect(() => {
    // debugger;
    dispatch(getBathrooms());
  }, [dispatch]);

  return (
    <div>
      <h1>My Toilets</h1>
      {!curUserBathrooms.length && <p>No toilets currently listed.</p>}
      {curUserBathrooms.map((bathroom) => {
        return (
          <div key={bathroom.id} className='my-bathrooms-container'>
            <div className='my-bathrooms__name-and-buttons'>
              <h3
                className='my-bathrooms__br-name'
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
                  className='my-bathrooms__delete-button'
                  onClick={() => {
                    dispatch(deleteBathroom(bathroom.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            <p className='my-bathrooms__location'>
              {bathroom.locality}, {bathroom.administrativeArea}
            </p>
          </div>
        );
      })}
      <div className='my-bathrooms__list-bathroom'>
        <BathroomCreateModal />
      </div>
    </div>
  );
};

export default MyBathroomsModal;
