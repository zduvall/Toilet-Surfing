import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { createFavorite } from '../../store/favorite';

import './FavoriteStar.css';

export default function FavoriteStar() {
  const dispatch = useDispatch();
  const { session, curBathroomId } = useSelector((state) => state);

  const [faved, setFaved] = useState(false)

  function handleClick() {
    console.log('Clicked favorite star');
    // setFaved(faved ? false : true)
    dispatch(
      createFavorite({ userId: session.user.id, bathroomId: curBathroomId })
    );
  }

  return (
    <>
      <i
        className={
          faved
            ? 'fas fa-star fa-lg star-fav'
            : 'far fa-star fa-lg star-not-fav'
        }
        title={
          faved ? 'Click to remove from favorites' : 'Click to add to favorites'
        }
        onClick={handleClick}
      ></i>
    </>
  );
}

// above for not filled in, below for filled in
// <i className='fas fa-star star-fav'></i>;
