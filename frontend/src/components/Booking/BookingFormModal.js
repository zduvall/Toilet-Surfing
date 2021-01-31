import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking } from '../../store/booking';

export default function BookingFormModal({ day, time, amPm }) {
  const { bathrooms, curBathroomId, session } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [timeLength, setTimeLength] = useState('h0m15');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // set beginning time for booking
    const dateTimeStart = new Date(day);
    let hours = Number(time.slice(0, time.indexOf(':')));
    hours = amPm === 'pm' ? hours + 12 : hours;
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

    // check if ending time is outside of allowed times
    const dateTimeLimit = new Date(day);
    dateTimeLimit.setHours(23, 0, 0);

    if (dateTimeEnd > dateTimeLimit) {
      setErrors((prevErrors) => [
        ...prevErrors,
        'Booking cannot end after 11:00pm.',
      ]);
      return;
    }

    // dispatch data
    return dispatch(
      createBooking({
        userId: session.user.id,
        bathroomId: curBathroomId,
        dateTimeStart,
        dateTimeEnd,
      })
    ).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
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
          <ul>
            <li>Must be logged in to book a toilet.</li>
          </ul>
        )}

        {!!errors.length && (
          <div>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </>
  );
}
