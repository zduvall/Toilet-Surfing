import './Bathroom.css';

export default function BathroomHeader({ name, owner, snglBRWidth }) {
  return (
    <div className='bathroom-header'>
      <h1 className='bathroom-header__name'>{name}</h1>
      <h2 className='bathroom-header__owner'>(by {owner})</h2>
    </div>
  );
}
