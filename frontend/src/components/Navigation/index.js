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
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
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
            <li className='nav__item'>{isLoaded && sessionLinks}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
