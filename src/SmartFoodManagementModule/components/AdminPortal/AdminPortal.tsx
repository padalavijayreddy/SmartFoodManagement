import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import {
   PortalDiv,
   MainContentDiv,
   HeaderContent,
   AdminPortalP,
   VideoDiv,
   UserSubmissionDiv,
   UserSubmissionColDiv
} from './styledComponents'
import { FcRight, FcLeft } from 'react-icons/fc'
import { SlideBar } from '../SlideBar'
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames'
import './index.scss'
import { FaHandsHelping } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
import Button from '../../../CommonModule/components/Button/Button'
import { TabBar } from '../../../CommonModule/components/TabBar'
import { TabView } from '../../../CommonModule/components/TabView'

interface AdminPageProps {
   shouldDisplaySideBar: boolean
   toggleDisplaySideBar: () => void
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   toggleModal: () => void
   signOut: () => void
   shouldDisplayModal: boolean
   tabBarStatus: string
   onChangeHomePageRoutes: () => void
   onChangeMyProjectsRoutes: () => void
   toggleDisplayCartFalse: () => void
}

const youtubeLinks = [
   { Language: 'Telugu', Link: 'https://www.youtube.com/embed/u6GJ1JGI0Mo' },
   { Language: 'Hindi', Link: 'https://www.youtube.com/embed/EaBrzZ1APqY' },
   { Language: 'English', Link: 'https://www.youtube.com/embed/NFPsLC4lfzo' }
]

const TabBarLIst = ['Notes', 'Discussions', 'Code Playground', 'Polls']

@observer
class AdminPortal extends Component<AdminPageProps> {
   @observable imageStatus = 'Schedule Meal'
   @observable display = true
   @observable languageStatus = 'Telugu'
   @observable linkToShow = 'https://www.youtube.com/embed/u6GJ1JGI0Mo'
   @observable selectedTab = 'Notes'
   @observable show = true

   changeTabBarStatus = eachButton => {
      this.selectedTab = eachButton
   }

   toggle = () => {
      this.display = !this.display
   }

   toggleTab = () => {
      this.show = !this.show
   }

   toggleFalse = event => {
      this.display = false
   }

   setLanguageStatus = language => {
      this.languageStatus = language
      const languageState = youtubeLinks.find(eachLink => {
         return eachLink.Language === language
      })
      this.linkToShow = languageState ? languageState.Link : ''
      this.toggle()
   }

   render() {
      const { shouldDisplaySideBar, toggleDisplaySideBar } = this.props
      return (
         <div>
            <UserSubmissionColDiv>
               <TabBar
                  selectedTab={this.selectedTab}
                  changeTabBarStatus={this.changeTabBarStatus}
                  show={this.show}
                  toggleTab={this.toggleTab}
               />
               <TabView
                  selectedTab={this.selectedTab}
                  changeTabBarStatus={this.changeTabBarStatus}
                  show={this.show}
                  toggleTab={this.toggleTab}
               />
            </UserSubmissionColDiv>
         </div>
      )
   }
}

export default AdminPortal

{
   /* <div
                  className='border:2 border-black border-solid'
                  id='ff-compose'
               ></div> */
}
{
   /* <iframe
                  // src='https://docs.google.com/forms/d/e/1FAIpQLScQASQh082_oQ-j666xPdnywaghO9m9qu9-oEMjIKqwm1Tc1w/viewform?embedded=true'
                  src='https://formfacade.com/include/102575141243311825140/form/1FAIpQLScQASQh082_oQ-j666xPdnywaghO9m9qu9-oEMjIKqwm1Tc1w/bootstrap.js?div=ff-compose'
                  width='640'
                  height='670'
               >
                  Loading…
               </iframe> */
}
{
   /* <script
                  async
                  defer
                  src='https://formfacade.com/include/102575141243311825140/form/1FAIpQLScQASQh082_oQ-j666xPdnywaghO9m9qu9-oEMjIKqwm1Tc1w/bootstrap.js?div=ff-compose'
               ></script> */
}
{
   /* <div id='ff-compose'></div> */
}
{
   /* <iframe
   src='https://docs.google.com/forms/d/e/1FAIpQLScQASQh082_oQ-j666xPdnywaghO9m9qu9-oEMjIKqwm1Tc1w/viewform?embedded=true&entry.1504515893=8499001239&entry.1710026095=finalAssignment1'
   width='640'
   height='601'
   frameBorder='0'
   overflow-y='scroll'
   scrolling='yes'
>
   Loading…
</iframe> */
}
{
   /* <iframe
   src='https://formfacade.com/headless/102575141243311825140/home/form/1FAIpQLScQASQh082_oQ-j666xPdnywaghO9m9qu9-oEMjIKqwm1Tc1w'
   sandbox='allow-same-origin allow-scripts allow-forms'
   scrolling='yes'
   frameBorder='0'
   width='100%'
   height='500px'
   overflow-y='scroll'
></iframe> */
}
