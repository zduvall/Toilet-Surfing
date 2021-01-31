import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import MyBookings from './MyBookings';

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
        My Bookings
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            if (openMenu) openMenu();
          }}
        >
          <MyBookings />
        </Modal>
      )}
    </>
  );
}
