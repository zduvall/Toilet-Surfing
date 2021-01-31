import { useState } from 'react';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';

export default function SessionLinksDropdown() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    let show = true;
    if (showMenu) show = false;
    setShowMenu(show);
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
          <li className='navbar__dropdown__button'>
            <LoginFormModal openMenu={openMenu} />
          </li>
          <li className='navbar__dropdown__button'>
            <SignUpFormModal openMenu={openMenu} />
          </li>
        </ul>
      )}
    </>
  );
}
