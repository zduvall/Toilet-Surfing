export default function IndDayBlock({ day }) {
  const curDay = day;
  return (
    <>
      {/* <div className='ind-day-block'> */}
      <div className='date-header-container'>
        <h1 className='date-header'>{curDay.toString().slice(0, 11)}</h1>
      </div>
      {/* </div> */}
    </>
  );
}
