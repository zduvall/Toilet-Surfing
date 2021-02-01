import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import BathroomCreateModal from './BathroomCreateModal';

export default function BathroomCreate({ openMenu, updateBathroom }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
        style={!!updateBathroom ? { color: 'rgb(242, 160, 84, 0.9)' } : {}}
      >
        {!!updateBathroom ? 'Update' : 'List Toilet'}
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            if (openMenu) openMenu();
          }}
        >
          <BathroomCreateModal updateBathroom={updateBathroom} />
        </Modal>
      )}
    </>
  );
}
