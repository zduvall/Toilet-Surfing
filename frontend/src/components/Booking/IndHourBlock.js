export default function IndHourBlock({ hour }) {
  return (
    <div className='ind-hour-block'>
      <button className='time-selector-button'>{`${hour}:00`}</button>
      <button className='time-selector-button'>{`${hour}:15`}</button>
      <button className='time-selector-button'>{`${hour}:30`}</button>
      <button className='time-selector-button'>{`${hour}:15`}</button>
    </div>
  );
}
