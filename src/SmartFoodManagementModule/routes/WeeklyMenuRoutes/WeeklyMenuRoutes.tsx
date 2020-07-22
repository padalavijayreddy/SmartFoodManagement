import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import FoodManagementHomePage from '../../components/FoodManagementHomePage'
import { AuthStore } from '../../../AuthenticationModule/stores/AuthStore'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'
import { RouteComponentProps } from 'react-router-dom'
import { SmartFoodManagementStore } from '../../stores/SmartFoodManagementStore'
import { SMART_FOOD_MANAGEMENT_HOME_PATH } from '../../constants/NavigationConstants'
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

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
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

   onChangeHomePageRoutes = () => {
      const { history } = this.props
      history.push(SMART_FOOD_MANAGEMENT_HOME_PATH)
   }

   signOut = () => {
      this.getAuthStore().userSignOut()
      const { history } = this.props
      history.replace(LOGIN_PATH)
   }

   render() {
      const {
         shouldDisplayCart,
         toggleDisplayCart,
         onChangeHomePageRoutes,
         signOut,
         tabBarStatus
      } = this
      return (
         <FoodManagementWeeklyMenu
            tabBarStatus={tabBarStatus}
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
            signOut={signOut}
            onChangeHomePageRoutes={onChangeHomePageRoutes}
         />
      )
   }
}

export { WeeklyMenuRoutes }
