import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

export default function BookingFormModal({ day, time, amPm }) {
  const { bathrooms, curBathroomId, session } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [timeLength, setTimeLength] = useState({ addHours: 0, addMinutes: 0 });
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
    const timeLengthParsed = JSON.parse(timeLength);
    minutes = minutes + timeLengthParsed.addMinutes;
    hours = hours + timeLengthParsed.addHours;

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
        'Booking cannot end after 11:00pm',
      ]);
      return;
    }

    // dispatch data
    // return dispatch(createBooking({userId: session.id, bathroomId: curBathroomId, dateTimeStart, timeLength}))
    // return dispatch(sessionActions.login({ credential })).catch((res) => {
    //   if (res.data && res.data.errors) setErrors(res.data.errors);
    // });
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
              <option value={JSON.stringify({ addHours: 0, addMinutes: 15 })}>
                15min
              </option>
              <option value={JSON.stringify({ addHours: 0, addMinutes: 30 })}>
                30min
              </option>
              <option value={JSON.stringify({ addHours: 0, addMinutes: 45 })}>
                45min
              </option>
              <option value={JSON.stringify({ addHours: 1, addMinutes: 0 })}>
                1hr
              </option>
              <option value={JSON.stringify({ addHours: 1, addMinutes: 15 })}>
                1hr 15 min
              </option>
              <option value={JSON.stringify({ addHours: 1, addMinutes: 30 })}>
                1hr 30min
              </option>
              <option value={JSON.stringify({ addHours: 1, addMinutes: 45 })}>
                1hr 45min
              </option>
              <option value={JSON.stringify({ addHours: 2, addMinutes: 0 })}>
                2hr
              </option>
            </select>
          </label>
        </div>

        <div>
          <button className='form__button' type='submit'>
            Book
          </button>
        </div>

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
