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
      <p>{curBathroom.lat}</p>
      <p>{curBathroom.lng}</p>
    </>
  );
}
