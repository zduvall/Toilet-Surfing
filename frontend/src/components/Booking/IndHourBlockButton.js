import { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingFormModal from './BookingFormModal';

export default function IndHourBlockButton({ time }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
        className='time-selector-button'
      >
        {time}
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <BookingFormModal />
        </Modal>
      )}
    </>
  );
}
