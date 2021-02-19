import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function SignUpFormPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    return dispatch(sessionActions.signUp({ email, username, password })).catch(
      (res) => {
        if (res.data && res.data.errors) {
          if (password !== confirmPassword) {
            setErrors([...res.data.errors, 'Password fields must match.']);
          } else {
            setErrors(res.data.errors);
          }
        }
      }
    );
  };

  return (
    <>
      {/* <h1>Sign Up</h1> */}

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Username
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <label>
            Confirm Password
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <button className='form__button' type='submit'>
            Start Surfing
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

export default SignUpFormPage;
