import React, { FC } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle
} from 'react-native'

interface BlackButtonProps {
  onPress: () => void
  style?: StyleProp<ViewStyle>
  title: string
}

const BlackButton: FC<BlackButtonProps> = ({ onPress, style = {}, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{ ...styles.blackButton, ...(style as any) }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BlackButton

const styles = StyleSheet.create({
  blackButton: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 50,
    elevation: 6,
    height: 45,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowOpacity: 0.27,
    width: 200
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  }
})
