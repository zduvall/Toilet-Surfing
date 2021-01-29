import { useState, useEffect } from 'react';
import IndDayBlock from './IndDayBlock';

import './Booking.css';

export default function Booking() {
  const [day1, setDay1] = useState(new Date());
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();
  const [day5, setDay5] = useState();
  const [dayShift, setDayShift] = useState();

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
            onClick={() => {
              setDay1(
                (prevDay1) => new Date(prevDay1.getTime() - 1000 * 60 * 60 * 24)
              );
            }}
          >
            <i
              class='fas fa-chevron-left fa-3x arrow-left'
              color={
                day1 === new Date() ? 'transparent' : 'rgba(242, 160, 84, 0.8)'
              }
            ></i>
          </button>
          <IndDayBlock day={day1} />
          <IndDayBlock day={day2} />
          <IndDayBlock day={day3} />
          <IndDayBlock day={day4} />
          <IndDayBlock day={day5} />
          <button
            onClick={() => {
              setDay1(
                (prevDay1) => new Date(prevDay1.getTime() + 1000 * 60 * 60 * 24)
              );
            }}
          >
            <i class='fas fa-chevron-right fa-3x arrow-right'></i>
          </button>
        </div>
      )}
    </div>
  );
}
