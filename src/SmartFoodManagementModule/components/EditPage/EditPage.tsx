import React, { Component } from 'react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import BannerDataModel from '../../stores/models/BannerDataModel'
import { BannerAnimation } from '../../../CommonModule/components/BannerAnimation'
import { Card } from '../Card'
import { Editdiv } from './styleComponents'
import EditPreferencesDataModel from '../../stores/models/EditPreferencesDataModel'
import { observer } from 'mobx-react'

interface EditPageProps {
   getEditPreferencesAPIError: string
   getEditPreferencesAPIStatus: number
   editPreferencesList: EditPreferencesDataModel
   startDate: Date
   handleDateChange: (date: any) => void
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   signOut: () => void
   tabBarStatus: string
   goBackHome: () => void
   onChangeWeeklyMenuRoutes: () => void
   bannerDataList: Array<BannerDataModel>
   getBannerDataAPIStatus: string
   getBannerDataAPIError: string
   doNetworkCalls: () => void
}

@observer
class EditPage extends Component<EditPageProps> {
   render() {
      const {
         goBackHome,
         startDate,
         handleDateChange,
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls,
         editPreferencesList,
         getEditPreferencesAPIError,
         getEditPreferencesAPIStatus
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
               <Card
                  goBackHome={goBackHome}
                  doNetworkCalls={doNetworkCalls}
                  startDate={startDate}
                  handleDateChange={handleDateChange}
                  editPreferencesList={editPreferencesList}
                  getEditPreferencesAPIError={getEditPreferencesAPIError}
                  getEditPreferencesAPIStatus={getEditPreferencesAPIStatus}
               />
            </Editdiv>
         </div>
      )
   }
}

export default WithHeaderComponent(EditPage)
