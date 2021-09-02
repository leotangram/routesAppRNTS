import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PermissionsContext } from '../context/PermissionsContext'
import BlackButton from '../components/BlackButton'

const PermissionsScreen = () => {
  const { askLocationPermission, permissions } = useContext(PermissionsContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Es necesario el uso del GPS para usar esta aplicación
      </Text>
      <BlackButton onPress={askLocationPermission} title="Permiss" />
      <Text style={{ marginTop: 20 }}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  )
}

export default PermissionsScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    width: 250
  }
})
