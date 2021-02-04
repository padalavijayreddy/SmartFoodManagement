import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'
import BannerDataModel from '../../stores/models/BannerDataModel'
import MenuItemsModel from '../../stores/models/MenuItemsModel'
import { MY_PROJECTS } from '../../constants/NavigationConstants'
import {
   ParallelogramCard,
   Newsimg,
   MYproject,
   LinerGradientShadow
} from './styledComponents'
import './index.css'
import { TabBarCSSTransition } from '../TabBarCSSTransition'
import { DemoTabs } from '../DemoTabs'
import { DemoTabs2 } from '../DemoTabs2'
import { DemoTabs3 } from '../DemoTabs3'

interface MyProjectsPageProps {
   toggleDisplayCartFalse: () => void
   tabBarStatus: string
   toggleDisplayCart: () => void
   shouldDisplayCart: boolean
   toggleModal: () => void
   shouldDisplayModal: boolean
   signOut: () => void
   onChangeWeeklyMenuRoutes: () => void
   onChangeHomePageRoutes: () => void
}

@observer
class MyProjects extends Component<MyProjectsPageProps> {
   render() {
      const { toggleDisplayCartFalse } = this.props
      return (
         <MYproject>
            <DemoTabs3 />
            <DemoTabs2 />
            <DemoTabs />
            {/* <div style={{ display: 'flex', marginTop: '100px' }}>
               <ParallelogramCard>
                  <Newsimg
                     className='clip-animation'
                     src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/arvrbg.png'
                  />
               </ParallelogramCard>
               <LinerGradientShadow>
                  <div className='gr'></div>
                  <div className='zz'>LINEAR GRADIENT BOX SHADOW</div>
               </LinerGradientShadow>
            </div> */}
         </MYproject>
      )
   }
}

export default WithHeaderComponent(MyProjects)
