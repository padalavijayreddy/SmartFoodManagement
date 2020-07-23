import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import FoodManagementHomePage from '../../components/FoodManagementHomePage'
import { AuthStore } from '../../../AuthenticationModule/stores/AuthStore'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'
import { RouteComponentProps } from 'react-router-dom'
import { SmartFoodManagementStore } from '../../stores/SmartFoodManagementStore'
import { WEEKLY_MENU_PATH } from '../../constants/NavigationConstants'

interface HomePageRoutesProps extends RouteComponentProps {}

interface InjectedProps extends HomePageRoutesProps {
   authStore: AuthStore
   smartFoodManagementStore: SmartFoodManagementStore
}

@inject('authStore', 'smartFoodManagementStore')
@observer
class HomePageRoutes extends React.Component<HomePageRoutesProps> {
   @observable shouldDisplayCart!: boolean
   @observable tabBarStatus!: string

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
      this.tabBarStatus = 'HOME'
   }

   componentDidMount() {
      this.doNetworkCalls()
   }

   doNetworkCalls = () => {
      this.getSmartFoodManagementStore().getBannerDataList()
      this.getSmartFoodManagementStore().getMenuItemsList()
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
         toggleDisplayCart,
         onChangeWeeklyMenuRoutes,
         signOut,
         tabBarStatus,
         doNetworkCalls
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
         <FoodManagementHomePage
            tabBarStatus={tabBarStatus}
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
            signOut={signOut}
            onChangeWeeklyMenuRoutes={onChangeWeeklyMenuRoutes}
            bannerDataList={bannerDataList}
            getBannerDataAPIStatus={getBannerDataAPIStatus}
            getBannerDataAPIError={getBannerDataAPIError}
            doNetworkCalls={doNetworkCalls}
            menuItemsList={menuItemsList}
            getMenuItemsAPIStatus={getMenuItemsAPIStatus}
            getMenuItemsAPIError={getMenuItemsAPIError}
         />
      )
   }
}

export { HomePageRoutes }
