import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Modal } from '../../context/Modal';
import BookingFormModal from './BookingFormModal';

// import context for bookings on this bathroom
import { useCurBRBookingsContext } from './index';

export default function IndHourBlockButton({ day, hour, time, amPm }) {
  const [showModal, setShowModal] = useState(false);
  const { users } = useSelector((state) => state);
  const { curBRBookings } = useCurBRBookingsContext();

  // find out time for this button
  const thisButtonTime = new Date(day);
  let hours = Number(time.slice(0, time.indexOf(':')));
  hours = amPm === 'pm' && hours !== 12 ? hours + 12 : hours;
  let minutes = Number(time.slice(time.indexOf(':') + 1));
  thisButtonTime.setHours(hours, minutes, 0);

  // check for conflicts
  let anyConflicts = false;
  let inThePast = false;
  let booker = null;

  // check if button time is in the past
  const curTime = new Date();
  if (thisButtonTime < curTime) inThePast = true;

  //check if button time overlaps with another booking
  curBRBookings.forEach((booking) => {
    const testBookingStart = new Date(booking.dateTimeStart);
    const testBookingEnd = new Date(booking.dateTimeEnd);

    if (
      (thisButtonTime.toDateString() === testBookingStart.toDateString() &&
        thisButtonTime.toTimeString() === testBookingStart.toTimeString()) ||
      (testBookingStart < thisButtonTime && thisButtonTime < testBookingEnd)
    ) {
      anyConflicts = true;
      booker = users[booking.userId].username;
    }
  });

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          e.stopPropagation();
        }}
        className={
          hour % 2 === 0
            ? 'time-selector-button time-selector-button-even'
            : 'time-selector-button time-selector-button-odd'
        }
        disabled={anyConflicts || inThePast}
        style={
          anyConflicts || inThePast
            ? {
                color: 'rgba(220, 220, 220)',
                cursor: 'not-allowed',
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
              }
            : {}
        }
        title={
          anyConflicts ? `Booked by ${booker}` : inThePast ? 'In the past' : ''
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
          <BookingFormModal
            day={day}
            time={time}
            amPm={amPm}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}
