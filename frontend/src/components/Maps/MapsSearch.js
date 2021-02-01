import { useState } from 'react';
// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useBathroomsInWindowContext } from '../Home/index';
import { setCurBathroomIdAction } from '../../store/curBathroom';

export default function Map() {
  const dispatch = useDispatch();

  const { setBathroomsInWindow } = useBathroomsInWindowContext();

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [map, setMap] = useState();

  const { bathrooms } = useSelector((state) => state);
  const bathroomsArray = Object.values(bathrooms);
  bathroomsArray.forEach((bathroom) => {
    bathroom.lng = Number(bathroom.lng);
    bathroom.lat = Number(bathroom.lat);
  });

  const containerStyle = {
    width: '100%',
    height: '420px',
  };
  const center = {
    lat: lat || 40.867011,
    lng: lng || -99.329509,
  };

  // useEffect(() => {
  //   function geolocate() {
  //     if (window.navigator && window.navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         onGeolocateSuccess,
  //         onGeolocateError
  //       );
  //     }
  //   }

  //   function onGeolocateSuccess(coordinates) {
  //     setLat(coordinates.coords.latitude);
  //     setLng(coordinates.coords.longitude);
  //   }

  //   function onGeolocateError(error) {
  //     console.warn(error.code, error.message);
  //   }

  //   geolocate();
  // }, [lat, lng]);

  function handleMarkerClick(e, bathroom) {
    dispatch(setCurBathroomIdAction(bathroom.id));
    setLat(e.latLng.lat());
    setLng(e.latLng.lng());
  }

  function handleMapLoad(currentMap) {
    setMap(currentMap);
  }

  function handleBoundsChanged() {
    const bounds = map.getBounds();
    const center = bounds.getCenter();
    dispatch(setCurBathroomIdAction(null));
    setLat(center.lat());
    setLng(center.lng());
    let shownBathrooms = bathroomsArray.filter((bathroom) =>
      bounds.contains(bathroom)
    );
    setBathroomsInWindow(shownBathrooms);
  }

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap
          id='search-map'
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
          onLoad={handleMapLoad}
          // onZoomChanged={handleBoundsChanged}
          // onBoundsChanged={handleBoundsChanged}
          onDragEnd={handleBoundsChanged}
          onClick={handleBoundsChanged}
        >
          {bathroomsArray.map((bathroom) => {
            return (
              <Marker
                id={bathroom.id}
                className='marker'
                key={bathroom.name}
                position={{
                  lat: Number(bathroom.lat),
                  lng: Number(bathroom.lng),
                }}
                title={`"${bathroom.name}"\n${bathroom.locality}, ${bathroom.administrativeArea}`}
                onClick={(e) => handleMarkerClick(e, bathroom)}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
