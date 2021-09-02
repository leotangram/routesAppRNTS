import React, { FC, useState } from 'react'
import { createContext } from 'react'
import { PermissionStatus } from 'react-native-permissions'

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

  const askLocationPermission = () => {}

  const checkLocationPermission = () => {}

  return (
    <PermissionsContext.Provider
      value={{ askLocationPermission, checkLocationPermission, permissions }}
    >
      {children}
    </PermissionsContext.Provider>
  )
}
