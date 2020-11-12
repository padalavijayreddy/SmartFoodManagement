import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import {
   PortalDiv,
   MainContentDiv,
   HeaderContent,
   AdminPortalP
} from './styledComponents'
import { FcRight, FcLeft } from 'react-icons/fc'
import { SlideBar } from '../SlideBar'

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
   toggleDisplayCartFalse: () => void
}

@observer
class AdminPortal extends Component<AdminPageProps> {
   @observable imageStatus = 'Schedule Meal'

   render() {
      const { shouldDisplaySideBar, toggleDisplaySideBar } = this.props
      return (
         <PortalDiv onClick={this.props.toggleDisplayCartFalse}>
            <MainContentDiv>
               <SlideBar
                  {...{
                     shouldDisplaySideBar,
                     toggleDisplaySideBar
                  }}
               />
               <HeaderContent>
                  {shouldDisplaySideBar ? (
                     <FcLeft size={50} onClick={toggleDisplaySideBar} />
                  ) : (
                     <FcRight size={50} onClick={toggleDisplaySideBar} />
                  )}
                  <AdminPortalP>ADMIN PORTAL</AdminPortalP>
               </HeaderContent>
               <SlideBar
                  {...{
                     shouldDisplaySideBar,
                     toggleDisplaySideBar
                  }}
               />
            </MainContentDiv>
         </PortalDiv>
      )
   }
}

export default WithHeaderComponent(AdminPortal)
