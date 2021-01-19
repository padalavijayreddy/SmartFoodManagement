import React, { Component } from 'react'
import { TabBar } from '../TabBar'

class TabView extends Component {
   renderTabView = () => {
      return (
         <div>
            {this.props.selectedTab == 'Notes'
               ? 'Notes'
               : this.props.selectedTab == 'Discussions'
               ? 'Discussions'
               : this.props.selectedTab == 'Code Playground'
               ? 'Code Playground'
               : 'Polls'}
         </div>
      )
   }

   render() {
      return <div>{this.renderTabView()}</div>
   }
}

export { TabView }
