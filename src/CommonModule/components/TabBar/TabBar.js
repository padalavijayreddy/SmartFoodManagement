import React from 'react'
import { observer } from 'mobx-react'
import { TabBarView, Tab } from './styledComponents'
import { tabBar } from '../../../CommonModule/i18nStrings/strings.json'
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure'
import { observable } from 'mobx'

const TabBarLIst = ['Notes', 'Discussions', 'Code Playground', 'Polls']

@observer
class TabBar extends React.Component {
   renderTabBarList = () => {
      return TabBarLIst.map(eachButton => {
         return (
            <Tab
               border={eachButton == this.props.selectedTab}
               onClick={() => this.props.changeTabBarStatus(eachButton)}
            >
               {eachButton}
            </Tab>
         )
      })
   }

   render() {
      const {
         TabBarLIst,
         ChangeTabBarStatus,
         doNetworkCalls,
         getTabBarListAPIStatus,
         getTabBarListAPIError
      } = this.props
      return <TabBarView>{this.renderTabBarList()}</TabBarView>
   }
}

export { TabBar }
