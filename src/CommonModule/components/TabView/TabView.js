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
            timeout={500}
            appear
            classNames='show'
         >
            <div className='tab-item'>
               {this.props.selectedTab == 'Notes' ? (
                  <Notes
                     show={this.props.show}
                     toggleTab={this.props.toggleTab}
                  />
               ) : this.props.selectedTab == 'Discussions' ? (
                  <DiscussionTab
                     show={this.props.show}
                     toggleTab={this.props.toggleTab}
                  />
               ) : this.props.selectedTab == 'Code Playground' ? (
                  <CodePlaygroundTab
                     show={this.props.show}
                     toggleTab={this.props.toggleTab}
                  />
               ) : (
                  <PollsTab
                     show={this.props.show}
                     toggleTab={this.props.toggleTab}
                  />
               )}
            </div>
         </CSSTransition>
      )
   }

   render() {
      return <div>{this.renderTabView()}</div>
   }
}

export { TabView }
