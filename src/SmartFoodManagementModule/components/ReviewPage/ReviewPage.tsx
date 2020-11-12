import React, { Component } from 'react'
import { ReviewCard } from '../ReviewCard'
import { Editdiv } from './styleComponents'
import { BannerAnimation } from '../../../CommonModule/components/BannerAnimation'
import EditPreferencesDataModel from '../../stores/models/EditPreferencesDataModel'
import BannerDataModel from '../../stores/models/BannerDataModel'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'

interface ReviewPageProps {
   getEditPreferencesAPIError: string
   getEditPreferencesAPIStatus: number
   editPreferencesList: EditPreferencesDataModel
   startDate: Date
   handleDateChange: (date: any) => void
   getPreviousDate: () => void
   getNextDate: () => void
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   shouldDisplayModal: boolean
   toggleModal: () => void
   signOut: () => void
   tabBarStatus: string
   goBackHome: () => void
   onChangeWeeklyMenuRoutes: () => void
   bannerDataList: Array<BannerDataModel>
   getBannerDataAPIStatus: string
   getBannerDataAPIError: string
   doNetworkCalls: () => void
   toggleDisplayCartFalse: () => void
}

class ReviewPage extends Component<ReviewPageProps> {
   render() {
      const {
         goBackHome,
         startDate,
         handleDateChange,
         getPreviousDate,
         getNextDate,
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls,
         editPreferencesList,
         getEditPreferencesAPIError,
         getEditPreferencesAPIStatus
      } = this.props
      return (
         <div onClick={this.props.toggleDisplayCartFalse}>
            <BannerAnimation
               bannerDataList={bannerDataList}
               getBannerDataAPIStatus={getBannerDataAPIStatus}
               getBannerDataAPIError={getBannerDataAPIError}
               doNetworkCalls={doNetworkCalls}
            />
            <Editdiv>
               <ReviewCard
                  goBackHome={goBackHome}
                  doNetworkCalls={doNetworkCalls}
                  startDate={startDate}
                  handleDateChange={handleDateChange}
                  getPreviousDate={getPreviousDate}
                  getNextDate={getNextDate}
                  editPreferencesList={editPreferencesList}
                  getEditPreferencesAPIError={getEditPreferencesAPIError}
                  getEditPreferencesAPIStatus={getEditPreferencesAPIStatus}
               />
            </Editdiv>
         </div>
      )
   }
}

export default WithHeaderComponent(ReviewPage)
