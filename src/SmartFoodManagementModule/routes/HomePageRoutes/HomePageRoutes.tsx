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
   SMART_FOOD_MANAGEMENT_EDIT_PATH,
   SMART_FOOD_MANAGEMENT_REVIEW_PATH
} from '../../constants/NavigationConstants'
import { format } from 'date-fns'

interface HomePageRoutesProps extends RouteComponentProps {}

interface InjectedProps extends HomePageRoutesProps {
   authStore: AuthStore
   smartFoodManagementStore: SmartFoodManagementStore
}

@inject('authStore', 'smartFoodManagementStore')
@observer
class HomePageRoutes extends React.Component<HomePageRoutesProps> {
   @observable shouldDisplayCart!: boolean
   @observable shouldDisplayModal!: boolean
   @observable tabBarStatus!: string
   @observable startDate: Date = new Date()
   @observable mealType!: string

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
      this.shouldDisplayModal = false
      this.tabBarStatus = 'HOME'
      this.mealType = ''
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

   toggleDisplayCartFalse = () => {
      this.shouldDisplayCart = false
   }

   toggleModal = () => {
      {
         this.shouldDisplayModal = this.shouldDisplayModal ? false : true
      }
   }

   onChangeMealType = (value: string) => {
      console.log('this.mealType', this.mealType)
      this.mealType = value
   }

   onChangeWeeklyMenuRoutes = () => {
      this.tabBarStatus = 'Weekly Menu'
      const { history } = this.props
      history.push(WEEKLY_MENU_PATH)
   }

   onChangeEditPageRoutes = (mealStatus: string) => {
      const { history } = this.props
      const DateString = format(this.startDate, 'MM/dd/yyyy')
      history.push({
         pathname: `/Smart-Food-Management/edit/${this.mealType}`,
         search: `?Date=${DateString}`
      })
   }

   onChangeReviewPageRoutes = () => {
      const { history } = this.props
      const DateString = format(this.startDate, 'MM/dd/yyyy')
      history.push({
         pathname: `/Smart-Food-Management/review/${this.mealType}`,
         search: `?Date=${DateString}`
      })
   }

   handleDateChange = (date: any) => {
      this.startDate = date
      this.menuNetworKcall()
   }

   getPreviousDate = () => {
      const currentDayInMilli = new Date(this.startDate).getTime()
      const oneDay = 1000 * 60 * 60 * 24
      const previousDayInMilli = currentDayInMilli - oneDay
      const previousDate = new Date(previousDayInMilli)
      this.handleDateChange(previousDate)
   }

   getNextDate = () => {
      const currentDayInMilli = new Date(this.startDate).getTime()
      const oneDay = 1000 * 60 * 60 * 24
      const nextDayInMilli = currentDayInMilli + oneDay
      const nextDate = new Date(nextDayInMilli)
      this.handleDateChange(nextDate)
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
         onChangeEditPageRoutes,
         onChangeReviewPageRoutes,
         signOut,
         tabBarStatus,
         doNetworkCalls,
         startDate,
         handleDateChange,
         getPreviousDate,
         getNextDate,
         mealType,
         onChangeMealType
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
            toggleDisplayCartFalse={toggleDisplayCartFalse}
            mealType={mealType}
            onChangeMealType={onChangeMealType}
            startDate={startDate}
            handleDateChange={handleDateChange}
            getPreviousDate={getPreviousDate}
            getNextDate={getNextDate}
            tabBarStatus={tabBarStatus}
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
            toggleModal={toggleModal}
            shouldDisplayModal={shouldDisplayModal}
            signOut={signOut}
            onChangeWeeklyMenuRoutes={onChangeWeeklyMenuRoutes}
            onChangeEditPageRoutes={onChangeEditPageRoutes}
            onChangeReviewPageRoutes={onChangeReviewPageRoutes}
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
