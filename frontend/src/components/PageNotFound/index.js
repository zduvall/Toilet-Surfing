import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h1 className='page-not-found__header'>Page not found</h1>
      <img
        className='page-not-found__image'
        src='/pictures/out-of-order.jpg'
        alt='Bathroom out of order'
      />
    </div>
  );
}
