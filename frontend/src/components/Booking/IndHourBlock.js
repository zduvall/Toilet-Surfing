import IndHourBlockButton from './IndHourBlockButton';

export default function IndHourBlock({ hour }) {
  return (
    <div className='ind-hour-block'>
      <IndHourBlockButton time={`${hour}:00`} />
      <IndHourBlockButton time={`${hour}:15`} />
      <IndHourBlockButton time={`${hour}:30`} />
      <IndHourBlockButton time={`${hour}:45`} />
    </div>
  );
}
