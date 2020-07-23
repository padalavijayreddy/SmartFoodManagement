import React, { Component } from 'react'
import { Header } from '../../../CommonModule/components/Header'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'
import BannerDataModel from '../../stores/models/BannerDataModel'
import MenuItemsModel from '../../stores/models/MenuItemsModel'

interface HomePageProps {
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   signOut: () => void
   tabBarStatus: string
   onChangeWeeklyMenuRoutes: () => void
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
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls,
         menuItemsList,
         getMenuItemsAPIStatus,
         getMenuItemsAPIError
      } = this.props
      return (
         <Home
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

export default WithHeaderComponent(FoodManagementHomePage)
