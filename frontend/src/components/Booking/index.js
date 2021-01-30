import { useState, useEffect } from 'react';
import IndDayBlock from './IndDayBlock';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import './Booking.css';

export default function Booking() {
  const [day1, setDay1] = useState(new Date());
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();
  const [day5, setDay5] = useState();

  useEffect(() => {
    setDay2(new Date(day1.getTime() + 1000 * 60 * 60 * 24));
    setDay3(new Date(day1.getTime() + 2 * (1000 * 60 * 60 * 24)));
    setDay4(new Date(day1.getTime() + 3 * (1000 * 60 * 60 * 24)));
    setDay5(new Date(day1.getTime() + 4 * (1000 * 60 * 60 * 24)));
  }, [day1]);

  return (
    <div>
      {day5 && (
        <div className='calendar'>
          <div className='arrow-container'>
            <LeftArrow day1={day1} setDay1={setDay1} />
          </div>
          <div className='calendar__days'>
            {/* <div>

            </div> */}
            <div className='ind-day-block-container'>
              <IndDayBlock day={day1} />
            </div>
            <div className='ind-day-block-container'>
              <IndDayBlock day={day2} />
            </div>
            <div className='ind-day-block-container'>
              <IndDayBlock day={day3} />
            </div>
            <div className='ind-day-block-container'>
              <IndDayBlock day={day4} />
            </div>
            <div className='ind-day-block-container'>
              <IndDayBlock day={day5} />
            </div>
          </div>
          <div className='arrow-container'>
            <RightArrow day5={day5} setDay1={setDay1} />
          </div>
        </div>
      )}
    </div>
  );
}
