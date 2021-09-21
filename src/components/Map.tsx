import React, { FC, useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useLocation } from '../hooks/useLocation'
import LoadingScreen from '../pages/LoadingScreen'
import Fab from './Fab'

interface MapProps {
  markers?: Marker[]
}

const Map: FC<MapProps> = ({ markers }) => {
  const {
    followUserLocation,
    getCurrentLocation,
    hasLocation,
    initialPosition,
    userLocation
  } = useLocation()
  const mapViewRef = useRef<MapView>()

  useEffect(() => {
    followUserLocation()

    return () => {
      // TODO: remove listener
    }
  }, [])

  useEffect(() => {
    const { latitude, longitude } = userLocation
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude }
    })
  }, [userLocation])

  const centerPosition = async () => {
    const { latitude, longitude } = await getCurrentLocation()

    mapViewRef.current?.animateCamera({
      center: { latitude, longitude }
    })
  }

  if (!hasLocation) {
    return <LoadingScreen />
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={{ flex: 1 }}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {markers?.map((marker, index) => (
          <Marker
            key={index}
            image={require('../assets/custom-marker.png')}
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            title="Title"
            description="Description"
          />
        ))}
      </MapView>
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{ bottom: 20, position: 'absolute', right: 20 }}
      />
    </>
  )
}

export default Map
