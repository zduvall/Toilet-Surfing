import IndHourBlock from './IndHourBlock';

export default function IndDayBlock({ day }) {
  const curDay = day;
  return (
    <div className='ind-day-block'>
      <div className='date-header-container'>
        <h1 className='date-header'>{curDay.toString().slice(0, 11)}</h1>
      </div>
      <div className='hours-block'>
        <IndHourBlock day={day} hour={'6'} amPm={'am'} />
        <IndHourBlock day={day} hour={'7'} amPm={'am'} />
        <IndHourBlock day={day} hour={'8'} amPm={'am'} />
        <IndHourBlock day={day} hour={'9'} amPm={'am'} />
        <IndHourBlock day={day} hour={'10'} amPm={'am'} />
        <IndHourBlock day={day} hour={'11'} amPm={'am'} />
        <IndHourBlock day={day} hour={'12'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'1'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'2'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'3'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'4'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'5'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'6'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'7'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'8'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'9'} amPm={'pm'} />
        <IndHourBlock day={day} hour={'10'} amPm={'pm'} />
      </div>
    </div>
  );
}
