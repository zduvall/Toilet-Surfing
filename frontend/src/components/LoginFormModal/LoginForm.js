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
            style={{ marginTop: '.65rem' }}
            onClick={(e) => {
              e.preventDefault();
              setCredential('PottyTraining');
              setPassword('pAssw@rd543');
            }}
          >
            Demo Credentials
          </button>
        </div>
        <div className={errors.length ? 'errors' : ''}>
          {!!errors.length &&
            errors.map((error, idx) => <div key={idx}>{error}</div>)}
        </div>
      </form>
    </>
  );
}

export default LoginForm;
