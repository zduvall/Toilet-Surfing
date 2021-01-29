import { isToday } from './bookingUtils';

export default function LeftArrow({ day1, setDay1 }) {
  return (
    <button
      disabled={isToday(day1)}
      onClick={() => {
        setDay1(
          (prevDay1) => new Date(prevDay1.getTime() - 1000 * 60 * 60 * 24)
        );
      }}
    >
      <i
        className='fas fa-chevron-left fa-3x arrow-left'
        style={{
          color: isToday(day1) ? 'transparent' : 'rgba(242, 160, 84, 0.8)',
        }}
      ></i>
    </button>
  );
}
