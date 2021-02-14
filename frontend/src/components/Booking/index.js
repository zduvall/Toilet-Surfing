import { useState, useEffect, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

// import utils
import { useWindowWidth } from '../customHooks';

//import components
import IndDayBlock from './IndDayBlock';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

//import css
import './Booking.css';

const CurBRBookingsContext = createContext();
export const useCurBRBookingsContext = () => useContext(CurBRBookingsContext);

export default function Booking() {
  const { curBathroomId, bookings } = useSelector((state) => state);

  // create state for context
  const [curBRBookings, setCurBRBookings] = useState([]);

  // create all other state variables
  const [day1, setDay1] = useState(new Date());
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();
  const [day5, setDay5] = useState();

  const width = useWindowWidth();

  // identify all bookings associated with this bathroom in next 2-week to use in context
  useEffect(() => {
    const bookingsArray = [...Object.values(bookings)];

    const todayPls2wks = new Date();
    todayPls2wks.setDate(todayPls2wks.getDate() + 14);

    const filterCurBRBookings = bookingsArray.filter(
      (booking) =>
        booking.bathroomId === curBathroomId &&
        new Date(booking.dateTimeStart) < todayPls2wks
    );
    setCurBRBookings(filterCurBRBookings);
  }, [bookings, curBathroomId]);

  useEffect(() => {
    setDay2(new Date(day1.getTime() + 1000 * 60 * 60 * 24));
    setDay3(new Date(day1.getTime() + 2 * (1000 * 60 * 60 * 24)));
    setDay4(new Date(day1.getTime() + 3 * (1000 * 60 * 60 * 24)));
    setDay5(new Date(day1.getTime() + 4 * (1000 * 60 * 60 * 24)));
  }, [day1]);

  return (
    <div>
      {day5 && (
        <CurBRBookingsContext.Provider
          value={{ curBRBookings, setCurBRBookings }}
        >
          <div className='calendar'>
            <div className='arrow-container'>
              <LeftArrow day1={day1} setDay1={setDay1} />
            </div>
            <div className='calendar__days'>
              <div className='ind-day-block-container'>
                <IndDayBlock day={day1} />
              </div>
              {width > 590 && (
                <div className='ind-day-block-container'>
                  <IndDayBlock day={day2} />
                </div>
              )}
              {width > 850 && (
                <div className='ind-day-block-container'>
                  <IndDayBlock day={day3} />
                </div>
              )}
              {width > 1110 && (
                <div className='ind-day-block-container'>
                  <IndDayBlock day={day4} />
                </div>
              )}
              {width > 1370 && (
                <div className='ind-day-block-container'>
                  <IndDayBlock day={day5} />
                </div>
              )}
            </div>
            <div className='arrow-container'>
              <RightArrow day5={day5} setDay1={setDay1} />
            </div>
          </div>
        </CurBRBookingsContext.Provider>
      )}
    </div>
  );
}
