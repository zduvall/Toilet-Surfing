import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <>
      {/* <h1>Log In</h1> */}

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username or Email
            <input
              type='text'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <button className='form__button' type='submit'>
            Log In
          </button>
        </div>

        <div>
          <button
            className='form__button'
            style={{marginTop: '.65rem'}}
            onClick={(e) => {
              e.preventDefault();
              setCredential('PottyTraining');
              setPassword('pAssw@rd543');
            }}
          >
            Demo Credentials
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

export default LoginForm;
