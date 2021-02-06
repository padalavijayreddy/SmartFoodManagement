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
   @observable statusBar = 'MY_PROFILE'

   changeTabBarStatus = eachButton => {
      if (this.selectedTab != eachButton) {
         this.selectedTab = eachButton
         this.toggleTab()
      }
   }

   changeStatusBar = (status: string) => {
      this.statusBar = status
   }

   toggle = () => {
      this.display = !this.display
   }

   toggleTab = () => {
      if (this.show == false) {
         this.show = true
      } else {
         this.show = false
      }
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
      const { statusBar, changeStatusBar } = this
      return (
         <div>
            <SlideBar
               {...{
                  statusBar,
                  changeStatusBar,
                  shouldDisplaySideBar,
                  toggleDisplaySideBar
               }}
            />

            <PortalDiv
               {...{ shouldDisplaySideBar }}
               onClick={() => {
                  this.props.toggleDisplayCartFalse()
                  this.toggleFalse(event)
               }}
            >
               <MainContentDiv>
                  <HeaderContent>
                     {shouldDisplaySideBar ? (
                        <FcLeft size={50} onClick={toggleDisplaySideBar} />
                     ) : (
                        <FcRight size={50} onClick={toggleDisplaySideBar} />
                     )}
                     <AdminPortalP>ADMIN PORTAL</AdminPortalP>
                  </HeaderContent>
                  <div className='flex p-5 h-1/4 w-1/2 status border-2 border-black m-2 justify-center items-center self-center'>
                     {statusBar == 'MY_PROFILE'
                        ? 'MY PROFILE'
                        : statusBar == 'TOURNAMENTS'
                        ? 'TOURNAMENTS'
                        : 'LEADER_BOARD_POSITIONS'}
                  </div>
                  <VideoDiv>
                     <div className='containers'>
                        <div onClick={e => e.stopPropagation()}>
                           <button
                              className={cx('togglers', {
                                 'togglers--active': this.display
                              })}
                              title='Change Language'
                              onClick={this.toggle}
                           >
                              {this.languageStatus}
                           </button>
                        </div>
                        <CSSTransition
                           in={this.display}
                           timeout={400}
                           classNames='displays'
                           unmountOnExit
                           appear
                        >
                           <div className='menu-items'>
                              <ul className='lists'>
                                 <li
                                    onClick={() =>
                                       this.setLanguageStatus('English')
                                    }
                                    className='list-items'
                                 >
                                    English
                                 </li>
                                 <li
                                    onClick={() =>
                                       this.setLanguageStatus('Telugu')
                                    }
                                    className='list-items'
                                 >
                                    Telugu
                                 </li>
                                 <li
                                    onClick={() =>
                                       this.setLanguageStatus('Hindi')
                                    }
                                    className='list-items'
                                 >
                                    Hindi
                                 </li>
                              </ul>
                           </div>
                        </CSSTransition>
                     </div>
                     <iframe
                        width='100%'
                        height='600'
                        src={this.linkToShow}
                        frameBorder='0'
                        overflow-y='scroll'
                        scrolling='yes'
                        allowFullScreen
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
                     ></iframe>
                     <UserSubmissionDiv>
                        <a className='HavingIssues' href=''>
                           Having issues?
                        </a>
                        <div className='sc-sLOAN lcmFil'>
                           <button className='SubmitFeedBack'>
                              Submit Feedback
                           </button>
                        </div>
                     </UserSubmissionDiv>
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
                  </VideoDiv>
               </MainContentDiv>
            </PortalDiv>
         </div>
      )
   }
}

export default WithHeaderComponent(AdminPortal)
