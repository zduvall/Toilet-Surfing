import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className='fas fa-user-circle' />
      </button>
      {showMenu && (
        <ul className='nav__profile-dropdown'>
          <li className='nav__profile-dropdown__info'>{user.username}</li>
          <li className='nav__profile-dropdown__info'>{user.email}</li>
          <li>
            <button className='nav__profile-dropdown__button' onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}
