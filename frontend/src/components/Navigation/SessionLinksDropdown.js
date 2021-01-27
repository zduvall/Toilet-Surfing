import { useState, useEffect } from 'react';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';

export default function SessionLinksDropdown() {
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

  return (
    <>
      <button onClick={openMenu}>
        <i className='fas fa-water'></i>
      </button>
      {showMenu && (
        <ul className='navbar__dropdown navbar__dropdown-logged-out click-ignore'>
          <li className='navbar__dropdown__button click-ignore'>
            <LoginFormModal />
          </li>
          <li className='navbar__dropdown__button click-ignore'>
            <SignUpFormModal />
          </li>
        </ul>
      )}
    </>
  );
}
