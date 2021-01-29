import { useState, useEffect } from 'react';
import IndDayBlock from './IndDayBlock';
import { isToday, is2WeeksFromToday } from './bookingUtils';

import './Booking.css';

export default function Booking() {
  const [day1, setDay1] = useState(new Date());
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();
  const [day5, setDay5] = useState();

  console.log(isToday(day1));

  useEffect(() => {
    console.log(day1);
    setDay2(new Date(day1.getTime() + 1000 * 60 * 60 * 24));
    setDay3(new Date(day1.getTime() + 2 * (1000 * 60 * 60 * 24)));
    setDay4(new Date(day1.getTime() + 3 * (1000 * 60 * 60 * 24)));
    setDay5(new Date(day1.getTime() + 4 * (1000 * 60 * 60 * 24)));
  }, [day1]);

  return (
    <div>
      {day5 && (
        <div className='calendar'>
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
                color: isToday(day1)
                  ? 'transparent'
                  : 'rgba(242, 160, 84, 0.8)',
              }}
            ></i>
          </button>
          <IndDayBlock day={day1} />
          <IndDayBlock day={day2} />
          <IndDayBlock day={day3} />
          <IndDayBlock day={day4} />
          <IndDayBlock day={day5} />
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
              style={{
                color: is2WeeksFromToday(day5)
                  ? 'transparent'
                  : 'rgba(242, 160, 84, 0.8)',
              }}
            ></i>
          </button>
        </div>
      )}
    </div>
  );
}
