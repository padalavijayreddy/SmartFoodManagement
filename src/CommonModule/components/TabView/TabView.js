import React, { Component } from 'react'
import { TabBar } from '../TabBar'
import { CSSTransition } from 'react-transition-group'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Notes } from '../Notes'
import { DiscussionTab } from '../DiscussionTab'
import { CodePlaygroundTab } from '../CodePlaygroundTab'
import { PollsTab } from '../PollsTab'
import './index.css'
import { WaterCount } from '../../../SmartFoodManagementModule/components/WaterCount'
import { RGBAPP } from '../../../SmartFoodManagementModule/components/RGBAPP'

observer
class TabView extends Component {
   renderTabView = () => {
      return (
         <CSSTransition
            in={this.props.show}
            timeout={300}
            unmountOnExit
            appear
            classNames='show'
         >
            <div className='tab-item'>
               {this.props.selectedTab == 'Notes' ? (
                  <WaterCount />
               ) : this.props.selectedTab == 'Discussions' ? (
                  <RGBAPP />
               ) : this.props.selectedTab == 'Code Playground' ? (
                  <CodePlaygroundTab />
               ) : (
                  <PollsTab />
               )}
            </div>
         </CSSTransition>

         // <div className='vijay'>
         //    {this.props.selectedTab == 'Notes' ? (
         //       <WaterCount />
         //    ) : this.props.selectedTab == 'Discussions' ? (
         //       <RGBAPP />
         //    ) : this.props.selectedTab == 'Code Playground' ? (
         //       <CodePlaygroundTab />
         //    ) : (
         //       <PollsTab />
         //    )}
         // </div>
      )
   }

   render() {
      return <div>{this.renderTabView()}</div>
   }
}

export { TabView }
