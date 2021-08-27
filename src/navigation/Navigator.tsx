import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from '../pages/MapScreen'
import PermissionsScreen from '../pages/PermissionsScreen'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff'
        },
        headerShown: false
      }}
    >
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  )
}

export default Navigator
