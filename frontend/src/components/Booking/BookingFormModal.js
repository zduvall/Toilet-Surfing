import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking } from '../../store/booking';

// import context for bookings on this bathroom
import { useCurBRBookingsContext } from './index';

export default function BookingFormModal({ day, time, amPm, setShowModal }) {
  const dispatch = useDispatch();
  const { bathrooms, curBathroomId, session } = useSelector((state) => state);
  const { curBRBookings, setCurBRBookings } = useCurBRBookingsContext();

  // defene state for this form
  const [timeLength, setTimeLength] = useState('h0m15');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    let newErrors = [];

    // set beginning time for booking
    const dateTimeStart = new Date(day);
    let hours = Number(time.slice(0, time.indexOf(':')));
    hours = amPm === 'pm' && hours !== 12 ? hours + 12 : hours;
    let minutes = Number(time.slice(time.indexOf(':') + 1));
    dateTimeStart.setHours(hours, minutes, 0);

    // set ending time for booking
    const dateTimeEnd = new Date(day);
    const addHours = Number(timeLength.slice(1, timeLength.indexOf('m')));
    const addMinutes = Number(timeLength.slice(timeLength.indexOf('m') + 1));
    hours = hours + addHours;
    minutes = minutes + addMinutes;

    if (minutes > 45) {
      minutes = minutes - 60;
      hours++;
    }
    dateTimeEnd.setHours(hours, minutes, 0);

    // check if ending time is past 11:00pm
    const dateTimeLimit = new Date(day);
    dateTimeLimit.setHours(23, 0, 0);

    if (dateTimeEnd > dateTimeLimit) {
      newErrors.push('Booking cannot end after 11:00pm.');
    }

    //check if booking overlaps with another booking
    let anyConflicts = false;
    curBRBookings.forEach((booking) => {
      const testBookingStart = new Date(booking.dateTimeStart);
      const testBookingEnd = new Date(booking.dateTimeEnd);

      if (
        (testBookingStart.toDateString() === dateTimeStart.toDateString() &&
          testBookingStart.toTimeString() === dateTimeStart.toTimeString()) ||
        (testBookingEnd.toDateString() === dateTimeEnd.toDateString() &&
          testBookingEnd.toTimeString() === dateTimeEnd.toTimeString()) ||
        (testBookingStart < dateTimeStart && dateTimeStart < testBookingEnd) ||
        (testBookingStart < dateTimeEnd && dateTimeEnd < testBookingEnd) ||
        (dateTimeStart < testBookingStart && testBookingStart < dateTimeEnd) ||
        (dateTimeStart < testBookingEnd && testBookingEnd < dateTimeEnd)
      ) {
        anyConflicts = true;
      }
    });
    if (anyConflicts) {
      newErrors.push('Booking cannot overlap with another booking.');
    }

    // if no errors dispatch data
    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setShowModal(false);
      const curBooking = dispatch(
        createBooking({
          userId: session.user.id,
          bathroomId: curBathroomId,
          dateTimeStart,
          dateTimeEnd,
        })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
      setCurBRBookings((prevBookings) => [...prevBookings, curBooking]);
      return curBooking;
    }
  };

  return (
    <>
      <h1>{`Book "${bathrooms[curBathroomId].name}"`}</h1>
      <h2>{`On ${day.toString().slice(0, 11)} at ${time}${amPm}`}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            For how long?
            <select
              className='booking-form__dropdown'
              type='text'
              value={timeLength}
              onChange={(e) => setTimeLength(e.target.value)}
              required
            >
              <option value='h0m15'>15min</option>
              <option value='h0m30'>30min</option>
              <option value='h0m45'>45min</option>
              <option value='h1m0'>1hr</option>
              <option value='h1m15'>1hr 15 min</option>
              <option value='h1m30'>1hr 30min</option>
              <option value='h1m45'>1hr 45min</option>
              <option value='h2m0'>2hr</option>
            </select>
          </label>
        </div>

        <div>
          <button
            className='form__button'
            type='submit'
            disabled={!session.user}
            style={
              !session.user ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
            }
          >
            Book
          </button>
        </div>

        {!session.user && (
          <div className='errors'>Must be logged in to book a toilet.</div>
        )}

        <div className={errors.length ? 'errors' : ''}>
          {!!errors.length &&
            errors.map((error, idx) => <div key={idx}>{error}</div>)}
        </div>
      </form>
    </>
  );
}
