import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoute } from '../../CommonModule/components/ProtectedRoute'
import { SMART_FOOD_MANAGEMENT_HOME_PATH } from '../../SmartFoodManagementModule/constants/NavigationConstants'
import { HomePageRoutes } from './HomePageRoutes'

export const SmartFoodManagementHomePageRoutes = [
   <ProtectedRoute
      key={SMART_FOOD_MANAGEMENT_HOME_PATH}
      path={SMART_FOOD_MANAGEMENT_HOME_PATH}
      component={HomePageRoutes}
   />
]
