import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { createFavorite, removeFavorite } from '../../store/favorite';

import './FavoriteStar.css';

export default function FavoriteStar() {
  const dispatch = useDispatch();
  const { session, curBathroomId, favorites } = useSelector((state) => state);
  const [favoriteId, setFavoriteId] = useState(null);

  useEffect(() => {
    const favoritesArray = Object.values(favorites);
    let found = false;
    favoritesArray.forEach((favorite) => {
      if (
        favorite.userId === session.user.id &&
        favorite.bathroomId === curBathroomId
      ) {
        setFavoriteId(favorite.id);
        found = true;
      }
      if (found === false) setFavoriteId(null);
    });
  }, [favorites, session, curBathroomId]);

  function handleClick() {
    console.log('Clicked favorite star');
    if (favoriteId) {
      dispatch(removeFavorite(favoriteId));
      setFavoriteId(null);
    } else {
      let favorite = dispatch(
        createFavorite({ userId: session.user.id, bathroomId: curBathroomId })
      );
      setFavoriteId(favorite.id);
    }
  }

  return (
    <>
      <i
        className={
          favoriteId
            ? 'fas fa-star fa-lg star-fav'
            : 'far fa-star fa-lg star-not-fav'
        }
        title={
          favoriteId
            ? 'Click to remove from favorites'
            : 'Click to add to favorites'
        }
        onClick={handleClick}
      ></i>
    </>
  );
}

// above for not filled in, below for filled in
// <i className='fas fa-star star-fav'></i>;
