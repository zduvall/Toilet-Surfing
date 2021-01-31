import './Bathroom.css';

// import customHook
import { useWindowWidth } from '../customHooks';

export default function BathroomHeader({ name, owner, snglBRWidth }) {
  const width = useWindowWidth();

  return (
    <div
      className='bathroom-header'
      style={
        width < 560 || (1110 > width && width > 800)
          ? { flexDirection: 'column', alignItems: 'flex-start' }
          : {}
      }
    >
      <h1 className='bathroom-header__name'>{name}</h1>
      <h2
        style={
          width < 540 || (1080 > width && width > 800)
            ? { margin: '0 0 .25rem 0' }
            : {}
        }
        className='bathroom-header__owner'
      >
        (by {owner})
      </h2>
    </div>
  );
}
