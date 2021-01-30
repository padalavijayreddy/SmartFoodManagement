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
   Parallelogramproject
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
         <Parallelogramproject>
            <ParallelogramCard>
               <Newsimg
                  className='clip-animation'
                  src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/arvrbg.png'
               />
            </ParallelogramCard>
         </Parallelogramproject>
      )
   }
}

export default WithHeaderComponent(MyProjects)
