import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { AuthStore } from '../../../AuthenticationModule/stores/AuthStore'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'
import { RouteComponentProps } from 'react-router-dom'
import { SmartFoodManagementStore } from '../../stores/SmartFoodManagementStore'
import { SmartFoodManagementEditStore } from '../../stores/SmartFoodManagementEditStore'
import {
   WEEKLY_MENU_PATH,
   SMART_FOOD_MANAGEMENT_HOME_PATH
} from '../../constants/NavigationConstants'
import ReviewPage from '../../components/ReviewPage'

interface ReviewPageProps extends RouteComponentProps {}

interface InjectedProps extends ReviewPageProps {
   authStore: AuthStore
   smartFoodManagementStore: SmartFoodManagementStore
   smartFoodManagementEditStore: SmartFoodManagementEditStore
}

@inject('authStore', 'smartFoodManagementStore', 'smartFoodManagementEditStore')
@observer
class ReviewPageRoutes extends React.Component<ReviewPageProps> {
   @observable shouldDisplayCart!: boolean
   @observable tabBarStatus!: string
   @observable shouldDisplayModal!: boolean
   @observable startDate!: Date

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
      this.shouldDisplayModal = false
      this.tabBarStatus = 'HOME'
      const queryString = require('query-string')
      const parsed = this.props.location.search.slice(6)
      this.startDate = new Date(parsed)
   }

   componentDidMount() {
      this.doNetworkCalls()
   }

   handleDateChange = (date: any) => {
      this.startDate = date
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

   doNetworkCalls = async () => {
      const mealType = this.props.match.params['mealType']
      await this.getSmartFoodManagementStore().getBannerDataList()
      await this.getSmartFoodManagementEditStore().getEditPreferencesList(
         mealType
      )
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthStore = () => {
      return this.getInjectedProps().authStore
   }

   getSmartFoodManagementStore = () => {
      return this.getInjectedProps().smartFoodManagementStore
   }

   getSmartFoodManagementEditStore = () => {
      return this.getInjectedProps().smartFoodManagementEditStore
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

   onChangeWeeklyMenuRoutes = () => {
      this.tabBarStatus = 'Weekly Menu'
      const { history } = this.props
      history.push(WEEKLY_MENU_PATH)
   }

   goBackHome = () => {
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
         shouldDisplayModal,
         toggleModal,
         onChangeWeeklyMenuRoutes,
         signOut,
         tabBarStatus,
         doNetworkCalls,
         startDate,
         handleDateChange,
         getPreviousDate,
         getNextDate,
         goBackHome,
         toggleDisplayCartFalse
      } = this
      const {
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError
      } = this.getSmartFoodManagementStore()
      const {
         editPreferencesList,
         getEditPreferencesAPIStatus,
         getEditPreferencesAPIError
      } = this.getSmartFoodManagementEditStore()
      return (
         <ReviewPage
            toggleDisplayCartFalse={toggleDisplayCartFalse}
            goBackHome={goBackHome}
            getEditPreferencesAPIError={getEditPreferencesAPIError}
            getEditPreferencesAPIStatus={getEditPreferencesAPIStatus}
            editPreferencesList={editPreferencesList}
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
            bannerDataList={bannerDataList}
            getBannerDataAPIStatus={getBannerDataAPIStatus}
            getBannerDataAPIError={getBannerDataAPIError}
            doNetworkCalls={doNetworkCalls}
         />
      )
   }
}

export { ReviewPageRoutes }
