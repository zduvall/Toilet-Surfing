import IndHourBlockButton from './IndHourBlockButton';

export default function IndHourBlock({ day, hour }) {
  return (
    <div className='ind-hour-block'>
      <IndHourBlockButton day={day} hour={hour} time={`${hour}:00`} />
      <IndHourBlockButton day={day} hour={hour} time={`${hour}:15`} />
      <IndHourBlockButton day={day} hour={hour} time={`${hour}:30`} />
      <IndHourBlockButton day={day} hour={hour} time={`${hour}:45`} />
    </div>
  );
}
