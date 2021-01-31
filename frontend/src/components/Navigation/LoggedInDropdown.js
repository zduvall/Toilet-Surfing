import { useState } from 'react';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

//import components
import BathroomCreateModal from '../BathroomCreateModal';
import MyBookingsModal from '../Booking/MyBookingsModal';

export default function LoggedInDropdown() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  const openMenu = () => {
    let show = true;
    if (showMenu) show = false;
    setShowMenu(show);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i
          className={
            showMenu ? 'far fa-window-close fa-lg' : 'fas fa-water fa-lg'
          }
        ></i>
      </button>
      {showMenu && (
        <ul className='navbar__dropdown navbar__dropdown-collapse'>
          <li className='navbar__dropdown__info'>{sessionUser.username}</li>
          <li className='navbar__dropdown__info'>{sessionUser.email}</li>
          <li className='navbar__dropdown__button'>
            <BathroomCreateModal openMenu={openMenu} />
          </li>
          <li className='navbar__dropdown__button'>
            <MyBookingsModal openMenu={openMenu} />
          </li>
          <li>
            <button className='navbar__dropdown__button' onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}
