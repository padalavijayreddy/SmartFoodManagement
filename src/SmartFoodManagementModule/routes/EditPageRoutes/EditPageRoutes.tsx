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
import EditPage from '../../components/EditPage'

interface EditPageProps extends RouteComponentProps {}

interface InjectedProps extends EditPageProps {
   authStore: AuthStore
   smartFoodManagementStore: SmartFoodManagementStore
   smartFoodManagementEditStore: SmartFoodManagementEditStore
}

@inject('authStore', 'smartFoodManagementStore', 'smartFoodManagementEditStore')
@observer
class EditPageRoutes extends React.Component<EditPageProps> {
   @observable shouldDisplayCart!: boolean
   @observable tabBarStatus!: string
   @observable startDate!: Date

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
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

   doNetworkCalls = () => {
      const mealType = this.props.match.params['mealType']
      this.getSmartFoodManagementStore().getBannerDataList()
      this.getSmartFoodManagementEditStore().getEditPreferencesList(mealType)
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
         onChangeWeeklyMenuRoutes,
         signOut,
         tabBarStatus,
         doNetworkCalls,
         startDate,
         handleDateChange,
         goBackHome
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
         <EditPage
            goBackHome={goBackHome}
            getEditPreferencesAPIError={getEditPreferencesAPIError}
            getEditPreferencesAPIStatus={getEditPreferencesAPIStatus}
            editPreferencesList={editPreferencesList}
            startDate={startDate}
            handleDateChange={handleDateChange}
            tabBarStatus={tabBarStatus}
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
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

export { EditPageRoutes }
