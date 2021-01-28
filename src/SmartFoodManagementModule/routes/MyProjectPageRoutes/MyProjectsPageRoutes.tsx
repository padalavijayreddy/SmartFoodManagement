import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import FoodManagementHomePage from '../../components/FoodManagementHomePage'
import { AuthStore } from '../../../AuthenticationModule/stores/AuthStore'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'
import { RouteComponentProps } from 'react-router-dom'
import { SmartFoodManagementStore } from '../../stores/SmartFoodManagementStore'
import {
   WEEKLY_MENU_PATH,
   MY_PROJECTS,
   SMART_FOOD_MANAGEMENT_HOME_PATH
} from '../../constants/NavigationConstants'
import { format } from 'date-fns'
import MyProjects from '../../components/MyProjects'

interface MyProjectsPageRoutesProps extends RouteComponentProps {}

interface InjectedProps extends MyProjectsPageRoutesProps {
   authStore: AuthStore
   smartFoodManagementStore: SmartFoodManagementStore
}

@inject('authStore', 'smartFoodManagementStore')
@observer
class MyProjectsPageRoutes extends React.Component<MyProjectsPageRoutesProps> {
   @observable shouldDisplayCart!: boolean
   @observable shouldDisplayModal!: boolean
   @observable tabBarStatus!: string

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
      this.shouldDisplayModal = false
      this.tabBarStatus = 'MY PROJECTS'
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

   onChangeWeeklyMenuRoutes = () => {
      this.tabBarStatus = 'Weekly Menu'
      const { history } = this.props
      history.push(WEEKLY_MENU_PATH)
   }

   signOut = () => {
      this.getAuthStore().userSignOut()
      const { history } = this.props
      history.replace(LOGIN_PATH)
   }

   render() {
      const {
         shouldDisplayCart,
         shouldDisplayModal,
         toggleModal,
         toggleDisplayCart,
         toggleDisplayCartFalse,
         onChangeWeeklyMenuRoutes,
         onChangeHomePageRoutes,
         signOut,
         tabBarStatus
      } = this
      const {
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         menuItemsList,
         getMenuItemsAPIStatus,
         getMenuItemsAPIError
      } = this.getSmartFoodManagementStore()
      return (
         <MyProjects
            toggleDisplayCartFalse={toggleDisplayCartFalse}
            tabBarStatus={tabBarStatus}
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
            toggleModal={toggleModal}
            shouldDisplayModal={shouldDisplayModal}
            signOut={signOut}
            onChangeWeeklyMenuRoutes={onChangeWeeklyMenuRoutes}
            onChangeHomePageRoutes={onChangeHomePageRoutes}
         />
      )
   }
}

export { MyProjectsPageRoutes }
