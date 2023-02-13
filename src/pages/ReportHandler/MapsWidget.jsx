/* eslint-disable no-undef */
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { Box, Flex } from '@chakra-ui/react';
import React, { useContext, useRef, useState } from 'react';
import { MyContext } from '../../context/context';
// import {GOOGLE_MAPS_APIKEY} from '../../..'

export default function MapsWidget({ requests, center, inspectors }) {
  const markerRef = useRef(null);
  const { setShowRequestInspector, setShowRequest, setOpen } = useContext(MyContext);

  const containerStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    featureType: 'transit',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAdn5fJbrsQ-ebgxC4crwIhbfGqYoMuxQE',
    libraries: ['places'],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <Flex h="90%" position="relative" flexDirection="column" alignItems="center" m="3%">
      <Box h="80vh" w="100%">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            onLoad={onLoad}
            onUnmount={onUnmount}>
            {inspectors.map((inspector) => (
              <Marker
                key={inspector.name}
                position={inspector.location}
                clickable
                onClick={() =>
                  setShowRequestInspector({ firstName: inspector.firstName, id: inspector._id })
                }
                icon={{
                  url: '/assets/policeman.png',
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
              />
            ))}
            {requests.map((request) => (
              <Marker
                key={request.lat}
                position={request.location}
                clickable
                onClick={() => {
                  setShowRequest({ ...request });
                  setOpen(true);
                }}
                icon={{
                  url:
                    request.status == 'Sent to the municipality'
                      ? '/assets/icon-grey.jpg'
                      : request.status == 'Sent to the inspector'
                      ? '/assets/icon-blue.jpg'
                      : '/assets/icon-green.jpg',
                  scaledSize: new window.google.maps.Size(25, 25),
                }}
              />
            ))}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"></Box>
    </Flex>
  );
}
