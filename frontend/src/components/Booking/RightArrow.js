import { is2WeeksFromToday } from './bookingUtils';

export default function RightArrow({ day5, setDay1 }) {
  return (
    <button
      disabled={is2WeeksFromToday(day5)}
      onClick={() => {
        setDay1(
          (prevDay1) => new Date(prevDay1.getTime() + 1000 * 60 * 60 * 24)
        );
      }}
    >
      <i
        className='fas fa-chevron-right fa-3x arrow-right'
        style={
          is2WeeksFromToday(day5)
            ? { color: 'rgba(242, 160, 84, 0.2)' }
            : { color: 'rgba(242, 160, 84, 0.8)' }
        }
      ></i>
    </button>
  );
}
