import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'
import BannerDataModel from '../../stores/models/BannerDataModel'
import MenuItemsModel from '../../stores/models/MenuItemsModel'

interface HomePageProps {
   mealType: string
   onChangeMealType: (value: string) => void
   startDate: Date
   handleDateChange: (date: any) => void
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   signOut: () => void
   tabBarStatus: string
   onChangeWeeklyMenuRoutes: () => void
   onChangeEditPageRoutes: (status: string) => void
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
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls,
         menuItemsList,
         getMenuItemsAPIStatus,
         getMenuItemsAPIError,
         onChangeEditPageRoutes
      } = this.props
      return (
         <Home
            mealType={mealType}
            onChangeMealType={onChangeMealType}
            startDate={startDate}
            handleDateChange={handleDateChange}
            bannerDataList={bannerDataList}
            getBannerDataAPIStatus={getBannerDataAPIStatus}
            getBannerDataAPIError={getBannerDataAPIError}
            doNetworkCalls={doNetworkCalls}
            menuItemsList={menuItemsList}
            getMenuItemsAPIStatus={getMenuItemsAPIStatus}
            getMenuItemsAPIError={getMenuItemsAPIError}
            onChangeEditPageRoutes={onChangeEditPageRoutes}
         />
      )
   }
}

export default WithHeaderComponent(FoodManagementHomePage)
