import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { PermissionsContext } from '../context/PermissionsContext'

const PermissionsScreen = () => {
  const { askLocationPermission, permissions } = useContext(PermissionsContext)

  return (
    <View style={styles.container}>
      <Text>PermissionsScreen</Text>
      <Button onPress={askLocationPermission} title="Permiss" />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  )
}

export default PermissionsScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
