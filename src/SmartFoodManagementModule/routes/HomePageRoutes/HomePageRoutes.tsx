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
   SMART_FOOD_MANAGEMENT_EDIT_PATH
} from '../../constants/NavigationConstants'

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
   @observable startDate: Date = new Date()

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
      this.getSmartFoodManagementStore().getMenuItemsList(this.startDate)
   }

   menuNetworKcall = () => {
      this.getSmartFoodManagementStore().getMenuItemsList(this.startDate)
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

   onChangeEditPageRoutes = (mealID: number) => {
      const { history } = this.props
      history.push(`${SMART_FOOD_MANAGEMENT_EDIT_PATH}${mealID}/`)
   }

   handleDateChange = (date: any) => {
      this.startDate = date
      this.menuNetworKcall()
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
         onChangeEditPageRoutes,
         signOut,
         tabBarStatus,
         doNetworkCalls,
         startDate,
         handleDateChange
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
            startDate={startDate}
            handleDateChange={handleDateChange}
            tabBarStatus={tabBarStatus}
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
            signOut={signOut}
            onChangeWeeklyMenuRoutes={onChangeWeeklyMenuRoutes}
            onChangeEditPageRoutes={onChangeEditPageRoutes}
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
