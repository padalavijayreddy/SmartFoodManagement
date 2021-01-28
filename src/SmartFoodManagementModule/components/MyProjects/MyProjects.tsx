import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'
import BannerDataModel from '../../stores/models/BannerDataModel'
import MenuItemsModel from '../../stores/models/MenuItemsModel'
import { MY_PROJECTS } from '../../constants/NavigationConstants'

interface MyProjectsPageProps {
   toggleDisplayCartFalse: () => void
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
class MyProjects extends Component<MyProjectsPageProps> {
   render() {
      const {
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
      return <div>MyPRojects</div>
   }
}

export default WithHeaderComponent(MyProjects)
