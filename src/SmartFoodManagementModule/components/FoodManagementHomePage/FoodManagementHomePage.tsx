import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'
import BannerDataModel from '../../stores/models/BannerDataModel'
import MenuItemsModel from '../../stores/models/MenuItemsModel'

interface HomePageProps {
   toggleDisplayCartFalse: () => void
   mealType: string
   onChangeMealType: (value: string) => void
   startDate: Date
   getPreviousDate: () => void
   getNextDate: () => void
   handleDateChange: (date: any) => void
   shouldDisplayCart: boolean
   shouldDisplayModal: boolean
   toggleDisplayCart: () => void
   toggleModal: () => void
   signOut: () => void
   tabBarStatus: string
   onChangeWeeklyMenuRoutes: () => void
   onChangeEditPageRoutes: (status: string) => void
   onChangeReviewPageRoutes: () => void
   bannerDataList: Array<BannerDataModel>
   getBannerDataAPIStatus: string
   getBannerDataAPIError: string
   doNetworkCalls: () => void
   menuItemsList: Array<MenuItemsModel>
   getMenuItemsAPIStatus: string
   getMenuItemsAPIError: string
}

@observer
class FoodManagementHomePage extends Component<HomePageProps> {
   render() {
      const {
         mealType,
         onChangeMealType,
         startDate,
         handleDateChange,
         getPreviousDate,
         getNextDate,
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls,
         menuItemsList,
         getMenuItemsAPIStatus,
         getMenuItemsAPIError,
         onChangeEditPageRoutes,
         onChangeReviewPageRoutes,
         toggleDisplayCartFalse
      } = this.props
      return (
         <Home
            toggleDisplayCartFalse={toggleDisplayCartFalse}
            mealType={mealType}
            onChangeMealType={onChangeMealType}
            startDate={startDate}
            handleDateChange={handleDateChange}
            getPreviousDate={getPreviousDate}
            getNextDate={getNextDate}
            bannerDataList={bannerDataList}
            getBannerDataAPIStatus={getBannerDataAPIStatus}
            getBannerDataAPIError={getBannerDataAPIError}
            doNetworkCalls={doNetworkCalls}
            menuItemsList={menuItemsList}
            getMenuItemsAPIStatus={getMenuItemsAPIStatus}
            getMenuItemsAPIError={getMenuItemsAPIError}
            onChangeEditPageRoutes={onChangeEditPageRoutes}
            onChangeReviewPageRoutes={onChangeReviewPageRoutes}
         />
      )
   }
}

export default WithHeaderComponent(FoodManagementHomePage)
