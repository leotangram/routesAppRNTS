import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from '../pages/MapScreen'
import PermissionsScreen from '../pages/PermissionsScreen'
import { PermissionsContext } from '../context/PermissionsContext'
import LoadingScreen from '../pages/LoadingScreen'

const Stack = createStackNavigator()

const Navigator = () => {
  const { permissions } = useContext(PermissionsContext)

  if (permissions.locationStatus === 'unavailable') return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff'
        },
        headerShown: false
      }}
    >
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  )
}

export default Navigator
