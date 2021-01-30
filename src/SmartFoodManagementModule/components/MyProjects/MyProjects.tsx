import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'
import BannerDataModel from '../../stores/models/BannerDataModel'
import MenuItemsModel from '../../stores/models/MenuItemsModel'
import { MY_PROJECTS } from '../../constants/NavigationConstants'
import {
   ParallelogramDiv,
   SubParallelogramDiv,
   Newsimg
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
            <ParallelogramDiv id='parallelogram'>
               <Newsimg src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/arvrbg.png' />
            </ParallelogramDiv>
            <ParallelogramDiv id='parallelogram'>
               <SubParallelogramDiv>
                  This is Vijay Reddy Padala
               </SubParallelogramDiv>
            </ParallelogramDiv>
         </div>
      )
   }
}

export default WithHeaderComponent(MyProjects)
