import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function BookingFormModal({ day, time }) {
  const { bathrooms, curBathroomId, session } = useSelector((state) => state);

  // const dispatch = useDispatch();
  const [timeLength, setTimeLength] = useState(0);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // return dispatch(sessionActions.login({ credential })).catch((res) => {
    //   if (res.data && res.data.errors) setErrors(res.data.errors);
    // });
  };

  console.log(curBathroomId);

  return (
    <>
      <h1>{`Book "${bathrooms[curBathroomId].name}"`}</h1>
      <h2>{`On ${day.toString().slice(0, 11)} at ${time}`}</h2>
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
              <option>15min</option>
              <option>30min</option>
              <option>45min</option>
              <option>1hr</option>
              <option>1hr 15 min</option>
              <option>1hr 30min</option>
              <option>1hr 45min</option>
              <option>2hr</option>
              <option>2hr 15 min</option>
              <option>2hr 30min</option>
              <option>2hr 45min</option>
              <option>3hr</option>
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
