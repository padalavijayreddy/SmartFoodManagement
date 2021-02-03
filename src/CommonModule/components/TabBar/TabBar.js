import React from 'react'
import { observer } from 'mobx-react'
import { TabBarView, Tab } from './styledComponents'
import { tabBar } from '../../../CommonModule/i18nStrings/strings.json'
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure'
import { observable } from 'mobx'
import cx from 'classnames'
import './index.css'

const TabBarLIst = [
   {
      id: 0,
      name: 'Notes',
      filled: false
   },
   {
      id: 1,
      name: 'Discussions',
      filled: false
   },
   {
      id: 2,
      name: 'Code Playground',
      filled: false
   },
   {
      id: 3,
      name: 'Polls',
      filled: false
   }
]

@observer
class TabBar extends React.Component {
   renderTabBarList = () => {
      return TabBarLIst.map(eachButton => {
         return (
            <Tab
               id={eachButton.id}
               border={eachButton.name == this.props.selectedTab}
               onClick={() => this.props.changeTabBarStatus(eachButton.name)}
            >
               {eachButton.name}
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
