import React, { Component } from 'react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import BannerDataModel from '../../stores/models/BannerDataModel'
import { BannerAnimation } from '../../../CommonModule/components/BannerAnimation'
import { Card } from '../Card'
import { Editdiv } from './styleComponents'

interface EditPageProps {
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   signOut: () => void
   tabBarStatus: string
   onChangeWeeklyMenuRoutes: () => void
   bannerDataList: Array<BannerDataModel>
   getBannerDataAPIStatus: string
   getBannerDataAPIError: string
   doNetworkCalls: () => void
}

class EditPage extends Component<EditPageProps> {
   render() {
      const {
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls
      } = this.props
      return (
         <div>
            <BannerAnimation
               bannerDataList={bannerDataList}
               getBannerDataAPIStatus={getBannerDataAPIStatus}
               getBannerDataAPIError={getBannerDataAPIError}
               doNetworkCalls={doNetworkCalls}
            />
            <Editdiv>
               <Card />
            </Editdiv>
         </div>
      )
   }
}

export default WithHeaderComponent(EditPage)
