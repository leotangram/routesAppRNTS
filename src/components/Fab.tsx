import React, { FC } from 'react'
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface FabProps {
  iconName: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

const Fab: FC<FabProps> = ({ iconName, onPress, style = {} }) => {
  return (
    <View style={{ ...(style as any) }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.blackButton}
      >
        <Icon color="#ffffff" name={iconName} size={35} />
      </TouchableOpacity>
    </View>
  )
}

export default Fab

const styles = StyleSheet.create({
  blackButton: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 100,
    elevation: 6,
    height: 50,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    width: 50,
    zIndex: 9999
  }
})
