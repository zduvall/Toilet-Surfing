export default function BathroomInfo({ curBathroom }) {
  return (
    <>
      <p>{curBathroom.description}</p>
      <p>
        {curBathroom.streetNumber} {curBathroom.route}
      </p>
      <p>
        {curBathroom.locality}, {curBathroom.administrativeArea}
      </p>
      <p>{curBathroom.postalCode}</p>
      <p>{curBathroom.country}</p>
      <p className='lat-lng'>
        {`Lat: ${curBathroom.lat} \u00A0 - \u00A0 Lng: ${curBathroom.lng}`}
      </p>
      {/* <p className='lat-lng'>Longitude: {curBathroom.lng}</p> */}
    </>
  );
}
