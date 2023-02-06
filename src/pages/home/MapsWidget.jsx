/* eslint-disable no-undef */
import env from 'react-dotenv';
import GoogleMapReact from 'google-map-react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
// import inspector from '/assets/policeman.png';
// const locations = [
//   { name: 'Rabin Square', position: { lat: 32.0808, lng: 34.78 } },
//   { name: 'HaTachana', position: { lat: 32.0609, lng: 34.771 } },
//   { name: 'Sarona Market', position: { lat: 32.0706, lng: 34.7884 } },
//   { name: 'Jaffa Port', position: { lat: 32.052, lng: 34.7542 } },
//   { name: 'Azrieli Center', position: { lat: 32.0834, lng: 34.7931 } },
//   { name: 'cyber', position: { lat: 32.0872801, lng: 34.8040903 } },
//   { name: 'shon', position: { lat: 31.967647, lng: 34.799213 } },
//   { name: 'Jorden', position: { lat: 30.991877, lng: 34.773976 } },
// ];

export default function MapsWidget({requests,inspectors,setShowRequestInspector,center}) {
  const markerRef = useRef(null);

  const containerStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: env.GOOGLE_MAPS_APIKEY,
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

  // animate
  function toggleBounce() {
    if (markerRef.current.marker.getAnimation() !== null) {
      markerRef.current.marker.setAnimation(null);
    } else {
      markerRef.current.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  return (
    <Flex position="relative" flexDirection="column" alignItems="center">
      <Box h="90vh" w="100%">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            
            onLoad={onLoad}
            onUnmount={onUnmount}>
            {inspectors.map((inspector) => (
              <Marker
                key={inspector.firstName}
                position={inspector.location}
                clickable
                onClick={()=>setShowRequestInspector({firstName:inspector.firstName, id:inspector._id})}
                icon={{
                  url: '/assets/policeman.png',
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
              />
            ))}
            {requests.map((request) => (
              
              <Marker
                key={request.name}
                position={request.location}
                clickable
                icon={{
                  url:request.status=='Sent to the municipality'? '/assets/icon-grey.jpg':request.status=='Sent to the inspector'? '/assets/icon-blue.jpg': '/assets/icon-green.jpg',
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
              />
            ))}
            
            {/* Child components, such as markers, info windows, etc. */}
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
