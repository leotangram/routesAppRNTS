import React, { FC, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

interface MapProps {
  markers?: Marker[]
}

const Map: FC<MapProps> = ({ markers }) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      error => console.log(error),
      { enableHighAccuracy: true }
    )
  }, [])

  return (
    <MapView
      style={{ flex: 1 }}
      // provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
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
  )
}

export default Map
