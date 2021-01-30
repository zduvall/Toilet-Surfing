import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

import { useSelector } from 'react-redux';

export default function BookingFormModal() {
  const { bathrooms, curBathroomId } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential })).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

  console.log(curBathroomId);

  return (
    <>
      <h1>{`Book ${bathrooms[curBathroomId].name}`}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            How long would you like to book the bathroom for?{' '}
            <input
              type='text'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <button className='form__button' type='submit'>
            Log In
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
