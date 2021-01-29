import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'
import BannerDataModel from '../../stores/models/BannerDataModel'
import MenuItemsModel from '../../stores/models/MenuItemsModel'
import { MY_PROJECTS } from '../../constants/NavigationConstants'
import {
   ProjectDiv,
   ParallelogramDiv,
   ParallelogramParentDiv,
   SubParallelogramDiv,
   Newsimg,
   LineDiv
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
         <div className='MyProjects-app'>
            <ProjectDiv>My Projects</ProjectDiv>
            <ParallelogramParentDiv>
               <ParallelogramDiv id='parallelogram'>
                  <Newsimg
                     src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/newsbg.png'
                     height='50%'
                     width='50%'
                  />
                  <LineDiv></LineDiv>
                  <SubParallelogramDiv>
                     Uttar Pradesh's Gautam Buddh Nagar recorded 107 new
                     Covid-19 cases on Saturday, pushing the district's
                     infection tally to 15,803, official data showed.
                  </SubParallelogramDiv>
               </ParallelogramDiv>
            </ParallelogramParentDiv>
         </div>
      )
   }
}

export default WithHeaderComponent(MyProjects)
