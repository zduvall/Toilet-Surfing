import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import MyFavorites from './MyFavorites';

export default function MyBookingsModal({ openMenu }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
      >
        My Favorites
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            if (openMenu) openMenu();
          }}
        >
          <MyFavorites setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}
