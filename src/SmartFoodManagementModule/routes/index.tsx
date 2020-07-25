import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoute } from '../../CommonModule/components/ProtectedRoute'
import {
   SMART_FOOD_MANAGEMENT_HOME_PATH,
   SMART_FOOD_MANAGEMENT_EDIT_PATH,
   WEEKLY_MENU_PATH
} from '../../SmartFoodManagementModule/constants/NavigationConstants'
import { HomePageRoutes } from './HomePageRoutes'
import { WeeklyMenuRoutes } from './WeeklyMenuRoutes'
import { EditPageRoutes } from './EditPageRoutes'

export const SmartFoodManagementHomePageRoutes = [
   <ProtectedRoute
      key={SMART_FOOD_MANAGEMENT_HOME_PATH}
      path={SMART_FOOD_MANAGEMENT_HOME_PATH}
      component={HomePageRoutes}
   />,
   <ProtectedRoute
      key={WEEKLY_MENU_PATH}
      path={WEEKLY_MENU_PATH}
      component={WeeklyMenuRoutes}
   />
]

export const SmartFoodManagementEditPageRoutes = [
   <ProtectedRoute
      key={SMART_FOOD_MANAGEMENT_EDIT_PATH}
      path={SMART_FOOD_MANAGEMENT_EDIT_PATH}
      component={EditPageRoutes}
   />
]
