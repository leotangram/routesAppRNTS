import React, { createContext, FC, useEffect, useState } from 'react'
import { AppState, Platform } from 'react-native'
import {
  check,
  PERMISSIONS,
  PermissionStatus,
  request
} from 'react-native-permissions'

export interface PermissionsState {
  locationStatus: PermissionStatus
}

export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable'
}

type PermissionsContextProps = {
  askLocationPermission: () => void
  checkLocationPermission: () => void
  permissions: PermissionsState
}

export const PermissionsContext = createContext({} as PermissionsContextProps)

export const PermissionsProvider: FC = ({ children }) => {
  const [permissions, setPermissions] = useState(permissionsInitState)

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') return
      checkLocationPermission()
    })
  }, [])

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus

    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else {
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus
    })
  }

  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus

    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus
    })
  }

  return (
    <PermissionsContext.Provider
      value={{ askLocationPermission, checkLocationPermission, permissions }}
    >
      {children}
    </PermissionsContext.Provider>
  )
}
