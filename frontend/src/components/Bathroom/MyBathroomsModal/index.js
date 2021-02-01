import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import MyBathrooms from './MyBathrooms';

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
        My Toilets
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            if (openMenu) openMenu();
          }}
        >
          <MyBathrooms setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}
