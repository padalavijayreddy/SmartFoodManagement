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
            <div style={{ border: '1px solid blue' }}>
               <canvas id='stockGraph' width='150' height='150'>
                  current stock price: $3.15 + 0.15
               </canvas>
               <canvas id='clock' width='150' height='150'>
                  <img src='images/clock.png' width='150' height='150' alt='' />
               </canvas>
            </div>
         </MYproject>
      )
   }
}

export default WithHeaderComponent(MyProjects)
