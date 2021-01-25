import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li className='nav__item'>
        <ProfileButton user={sessionUser} />
      </li>
    );
  } else {
    sessionLinks = (
      <>
        <li className='nav__item'>
          <LoginFormModal />
        </li>
        <li className='nav__item'>
          <SignUpFormModal />
        </li>
      </>
    );
  }

  return (
    <header className='site-header'>
      <div className='site-header__wrapper'>
        <a href='#'>Brand</a>
        <nav className='nav'>
          <ul className='nav__wrapper'>
            <li className='nav__item'>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            {isLoaded && sessionLinks}
          </ul>
        </nav>
      </div>
    </header>
  );
}
