import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoute } from '../../CommonModule/components/ProtectedRoute'
import {
   SMART_FOOD_MANAGEMENT_HOME_PATH,
   SMART_FOOD_MANAGEMENT_EDIT_PATH,
   SMART_FOOD_MANAGEMENT_REVIEW_PATH,
   WEEKLY_MENU_PATH,
   ADMIN_PORTAL_PATH,
   MY_PROJECTS
} from '../../SmartFoodManagementModule/constants/NavigationConstants'
import { HomePageRoutes } from './HomePageRoutes'
import { WeeklyMenuRoutes } from './WeeklyMenuRoutes'
import { EditPageRoutes } from './EditPageRoutes'
import { ReviewPageRoutes } from './ReviewPageRoutes'
import { AdminPageRoutes } from './AdminPageRoutes/AdminPageRoutes'
import { MyProjectsPageRoutes } from './MyProjectPageRoutes'

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
   />,
   <ProtectedRoute
      key={MY_PROJECTS}
      path={MY_PROJECTS}
      component={MyProjectsPageRoutes}
   />
]

export const SmartFoodManagementEditPageRoutes = [
   <ProtectedRoute
      key={SMART_FOOD_MANAGEMENT_EDIT_PATH}
      path={SMART_FOOD_MANAGEMENT_EDIT_PATH}
      component={EditPageRoutes}
   />
]

export const SmartFoodManagementReviewPageRoutes = [
   <ProtectedRoute
      key={SMART_FOOD_MANAGEMENT_REVIEW_PATH}
      path={SMART_FOOD_MANAGEMENT_REVIEW_PATH}
      component={ReviewPageRoutes}
   />
]

export const SmartFoodManagementAdminPageRoutes = [
   <ProtectedRoute
      key={ADMIN_PORTAL_PATH}
      path={ADMIN_PORTAL_PATH}
      component={AdminPageRoutes}
   />
]
