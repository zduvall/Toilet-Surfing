import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getBathrooms } from '../../store/bathroom';
import { useBathroomsInWindowContext } from '../Home/index';

export default function Map({ setSelectedBathroomId }) {
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

  useEffect(() => {
    dispatch(getBathrooms());
  }, [dispatch]);

  const containerStyle = {
    width: '100%',
    height: '420px',
  };
  const center = {
    lat: lat || 40.867011,
    lng: lng || -99.329509,
  };

  useEffect(() => {
    function geolocate() {
      if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          onGeolocateSuccess,
          onGeolocateError
        );
      }
    }

    function onGeolocateSuccess(coordinates) {
      setLat(coordinates.coords.latitude);
      setLng(coordinates.coords.longitude);
    }

    function onGeolocateError(error) {
      console.warn(error.code, error.message);
    }

    geolocate();
  }, [lat, lng]);

  function handleMarkerClick(e, bathroom) {
    setSelectedBathroomId(bathroom.id);
    setLat(e.latLng.lat());
    setLng(e.latLng.lng());
  }

  function handleMapLoad(e) {
    setMap(e);
    // const bounds = currentMap.getBounds();
    // let shownBathrooms = bathroomsArray.filter((bathroom) =>
    //   bounds.contains(bathroom)
    // );
    // setBathroomsInWindow(shownBathrooms);
  }

  function handleBoundsChanged() {
    const bounds = map.getBounds();
    const center = bounds.getCenter();
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
          zoom={5}
          onLoad={handleMapLoad}
          // onZoomChanged={handleBoundsChanged}
          onDragEnd={handleBoundsChanged}
          // onBoundsChanged={handleBoundsChanged}
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
