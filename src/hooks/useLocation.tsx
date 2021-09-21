import { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import { Location } from '../interfaces/appInterfaces'

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false)
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0
  })
  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0
  })

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location)
      setUserLocation(location)
      setHasLocation(true)
    })
  }, [])

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude
          })
        },
        error => reject({ error }),
        { enableHighAccuracy: true }
      )
    })
  }

  const followUserLocation = () => {
    Geolocation.watchPosition(
      ({ coords }) => {
        setUserLocation({
          latitude: coords.latitude,
          longitude: coords.longitude
        })
      },
      error => console.log(error),
      { distanceFilter: 10, enableHighAccuracy: true }
    )
  }

  return {
    followUserLocation,
    getCurrentLocation,
    hasLocation,
    initialPosition,
    userLocation
  }
}
