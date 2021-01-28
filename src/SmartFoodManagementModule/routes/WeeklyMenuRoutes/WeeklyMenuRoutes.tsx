import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import FoodManagementHomePage from '../../components/FoodManagementHomePage'
import { AuthStore } from '../../../AuthenticationModule/stores/AuthStore'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'
import { RouteComponentProps } from 'react-router-dom'
import { SmartFoodManagementStore } from '../../stores/SmartFoodManagementStore'
import {
   SMART_FOOD_MANAGEMENT_HOME_PATH,
   ADMIN_PORTAL_PATH,
   MY_PROJECTS
} from '../../constants/NavigationConstants'
import FoodManagementWeeklyMenu from '../../components/FoodManagementWeeklyMenu'

interface WeeklyMenuRoutesProps extends RouteComponentProps {}

interface InjectedProps extends WeeklyMenuRoutesProps {
   authStore: AuthStore
   smartFoodManagementStore: SmartFoodManagementStore
}

@inject('authStore', 'smartFoodManagementStore')
@observer
class WeeklyMenuRoutes extends React.Component<WeeklyMenuRoutesProps> {
   @observable shouldDisplayCart!: boolean
   @observable tabBarStatus!: string
   @observable shouldDisplayModal!: boolean

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
      this.shouldDisplayModal = false
      this.tabBarStatus = 'Weekly Menu'
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthStore = () => {
      return this.getInjectedProps().authStore
   }

   getSmartFoodManagementStore = () => {
      return this.getInjectedProps().smartFoodManagementStore
   }

   toggleDisplayCart = () => {
      {
         this.shouldDisplayCart = this.shouldDisplayCart ? false : true
      }
   }

   toggleDisplayCartFalse = () => {
      this.shouldDisplayCart = false
   }

   toggleModal = () => {
      {
         this.shouldDisplayModal = this.shouldDisplayModal ? false : true
      }
   }

   onChangeHomePageRoutes = () => {
      const { history } = this.props
      history.push(SMART_FOOD_MANAGEMENT_HOME_PATH)
   }

   onChangeMyProjectsRoutes = () => {
      const { history } = this.props
      history.push(MY_PROJECTS)
   }

   onChangeAdminRoutes = () => {
      const { history } = this.props
      alert('Hi Admin')
      history.push(ADMIN_PORTAL_PATH)
   }

   signOut = () => {
      this.getAuthStore().userSignOut()
      const { history } = this.props
      history.replace(LOGIN_PATH)
   }

   render() {
      const {
         toggleDisplayCartFalse,
         shouldDisplayCart,
         toggleDisplayCart,
         onChangeHomePageRoutes,
         onChangeMyProjectsRoutes,
         shouldDisplayModal,
         toggleModal,
         signOut,
         tabBarStatus,
         onChangeAdminRoutes
      } = this
      return (
         <FoodManagementWeeklyMenu
            toggleDisplayCartFalse={toggleDisplayCartFalse}
            onChangeAdminRoutes={onChangeAdminRoutes}
            tabBarStatus={tabBarStatus}
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
            signOut={signOut}
            toggleModal={toggleModal}
            shouldDisplayModal={shouldDisplayModal}
            onChangeHomePageRoutes={onChangeHomePageRoutes}
            onChangeMyProjectsRoutes={onChangeMyProjectsRoutes}
         />
      )
   }
}

export { WeeklyMenuRoutes }
