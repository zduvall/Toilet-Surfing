import { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingFormModal from './BookingFormModal';

export default function IndHourBlockButton({ hour, time }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
        className={
          hour % 2 === 0
            ? 'time-selector-button-even'
            : 'time-selector-button-odd'
        }
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
