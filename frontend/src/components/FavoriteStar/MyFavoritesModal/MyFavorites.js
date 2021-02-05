import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurBathroomIdAction } from '../../../store/curBathroom';

// import store items
import { getBathrooms } from '../../../store/bathroom';

const MyBathroomsModal = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const { session, bathrooms, favorites } = useSelector((state) => state);
  const bathroomsArray = [...Object.values(bathrooms)];
  const favoritesArray = [...Object.values(favorites)];
  const curUserFavorites = favoritesArray.filter(
    (favorite) => favorite.userId === session.user.id
  );
  const curUserFavoritesIds = curUserFavorites.map(
    (favorite) => favorite.bathroomId
  );
  const curUserFavBathrooms = bathroomsArray.filter((bathroom) =>
    curUserFavoritesIds.includes(bathroom.id)
  );

  // trigger get all bathrooms
  useEffect(() => {
    dispatch(getBathrooms());
  }, [dispatch]);

  return (
    <div>
      <h1>My Favorites</h1>
      {!curUserFavBathrooms.length && <p>No toilets currently favorited.</p>}
      {curUserFavBathrooms.map((bathroom) => {
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
            </div>
            <p className='my-bathrooms__location'>
              {bathroom.locality}, {bathroom.administrativeArea}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MyBathroomsModal;
