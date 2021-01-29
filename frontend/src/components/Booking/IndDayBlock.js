export default function IndDayBlock({ day }) {
  const curDay = day;
  return (
    <div className='ind-day-block'>
      <h1>{curDay.toString().slice(0, 11)}</h1>
    </div>
  );
}