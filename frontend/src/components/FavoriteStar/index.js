import './FavoriteStar.css';

export default function FavoriteStar({ curBathroomId }) {
  let faved = false;
  
  function handleClick() {
    console.log('Clicked favorite star');
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
