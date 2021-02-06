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
import { WaterCount } from '../WaterCount'
import { RGBAPP } from '../RGBAPP'
import { EachGlass } from '../Glass/styledComponents'
import Button from '../../../CommonModule/components/Button/Button'
import { ProjectsShow } from '../ProjectsShow'
import { GoBack } from '../../../CommonModule/components/GoBack'

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
   @observable projectsShow = true
   @observable projectName = ''
   @observable backButton = false

   projectsNavigate = (id: number) => {
      if (id == 0) {
         alert('Water Count')
         this.projectName = 'WATER_COUNT_APP'
         this.projectsShow = false
         this.backButton = true
      } else if (id == 1) {
         alert('RGB APP')
         this.projectName = 'RGB_APP'
         this.projectsShow = false
         this.backButton = true
      } else {
         this.projectName = ''
         this.projectsShow = true
         this.backButton = false
      }
   }

   render() {
      const { toggleDisplayCartFalse } = this.props
      return (
         <MYproject>
            {this.projectsShow == true ? (
               <ProjectsShow projectsNavigate={this.projectsNavigate} />
            ) : (
               ''
            )}
            {this.backButton == true ? (
               <GoBack
                  projectName={this.projectName}
                  projectsNavigate={this.projectsNavigate}
               />
            ) : (
               ''
            )}
            {this.projectName == 'WATER_COUNT_APP' ? (
               <WaterCount />
            ) : this.projectName == 'RGB_APP' ? (
               <RGBAPP />
            ) : (
               ''
            )}
         </MYproject>
      )
   }
}

export default WithHeaderComponent(MyProjects)

{
   /* <DemoTabs3 />
<DemoTabs2 />
<DemoTabs />
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
<div className='animation'>animated box</div>
<WaterCount />
<RGBAPP /> */
}
