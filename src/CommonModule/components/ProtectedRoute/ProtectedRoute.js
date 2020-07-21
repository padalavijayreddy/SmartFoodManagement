import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getAccessToken } from '../../utils/StorageUtils'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'

export const ProtectedRoute = props => {
   const { component: Component, ...others } = props
   return getAccessToken() ? (
      <Route component={Component} {...others} />
   ) : (
      <Redirect to={{ pathname: LOGIN_PATH }} />
   )
}
