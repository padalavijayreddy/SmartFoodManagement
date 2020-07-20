import React from 'react'
import { Route } from 'react-router-dom'
import { LOGIN_PATH } from '../constants/NavigationConstants'
import LoginRoute from './LoginRoute'

export const AuthRoutes = [
   <Route
      key={Math.random().toString()}
      path={LOGIN_PATH}
      component={LoginRoute}
   />
]
