import { useState } from 'react';
import { createBathroom } from '../../store/bathroom';
import { useDispatch, useSelector } from 'react-redux';

const BathroomCreateModal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [streetNumber, setStreetNumber] = useState('');
  const [route, setRoute] = useState('');
  const [locality, setLocality] = useState('');
  const [administrativeArea, setAdministrativeArea] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  // // for multuple file upload
  // const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    let newErrors = [];
    dispatch(
      createBathroom({
        bathroomOwnerId: user.id,
        name,
        description,
        image,
        streetNumber,
        route,
        locality,
        administrativeArea,
        postalCode,
        country,
        lat,
        lng,
      })
    )
      .then(() => {
        setName('');
        setDescription('');
        setImage(null);
        setStreetNumber('');
        setRoute('');
        setLocality('');
        setAdministrativeArea('');
        setPostalCode('');
        setCountry('');
        setLat('');
        setLng('');
      })
      .catch((res) => {
        if (res.data && res.data.errors) {
          newErrors = res.data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setImages(files);
  //   };

  return (
    <div>
      <h1>Create Bathroom</h1>
      <form
        style={{ display: 'flex', flexFlow: 'column' }}
        onSubmit={handleSubmit}
      >
        <label>
          Bathroom Name
          <input
            type='text'
            placeholder="Potty Like it's 1999"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        Description
        <label>
          <textarea
            placeholder="I was dreamin' when I wrote this, forgive me if it goes astray, but when you wake up in the morning, you'll be glad this room began your day 🎶🎵 Please stop by and use this bathroom ;)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <input type='file' onChange={updateFile} />
        </label>
        <label>
          Street Number
          <input
            type='input'
            placeholder='1556'
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
          />
        </label>
        <label>
          Route
          <input
            type='input'
            placeholder='Broadway'
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          />
        </label>
        <label>
          Locality
          <input
            type='input'
            placeholder='New York'
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
        </label>
        <label>
          Administrative Area
          <input
            type='input'
            placeholder='NY'
            value={administrativeArea}
            onChange={(e) => setAdministrativeArea(e.target.value)}
          />
        </label>
        <label>
          Postal Code
          <input
            type='input'
            placeholder='10120'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        <label>
          Country
          <input
            type='input'
            placeholder='United States'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          Latitude
          <input
            type='input'
            placeholder='40.758404'
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </label>
        <label>
          Longitude
          <input
            type='input'
            placeholder='-73.985478'
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </label>
        {/* <label>
          Multiple Upload
          <input type='file' multiple onChange={updateFiles} />
        </label> */}
        <button className='form__button' type='submit'>Create Bathroom</button>
      </form>
      {errors.length > 0 &&
        errors.map((error) => <div key={error}>{error}</div>)}
    </div>
  );
};

export default BathroomCreateModal;
