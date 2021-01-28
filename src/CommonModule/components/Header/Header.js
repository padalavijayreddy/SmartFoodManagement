import React from 'react'
import {
   TopBar,
   SignOutbutton,
   NotificationIcon,
   HeaderNotify,
   ButtonStyles,
   Incampus,
   SwitchIn,
   ProfileSpan,
   SignOut,
   NotifyNum
} from './HeaderStyle'
import { header } from '../../i18nStrings/strings.json'
import { Profile } from '../Profile'
import { Notification } from '../Notification'
import { toast, Zoom } from 'react-toastify'
import Button from '../Button/Button'
import { CommonHeader } from '../../i18nStrings/strings.json'
import Switch from 'react-switch'
import { observable } from 'mobx'
import { GoBell } from 'react-icons/go'

class Header extends React.Component {
   constructor() {
      super()
      this.state = { checked: true }
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(checked) {
      this.setState({ checked })
   }

   onChangeHome = () => {
      const { tabBarStatus, onChangeHomePageRoutes } = this.props
      if (tabBarStatus != 'HOME') {
         onChangeHomePageRoutes()
      } else {
         return null
      }
   }

   onChangeMyProjects = () => {
      const { tabBarStatus, onChangeMyProjectsRoutes } = this.props
      if (tabBarStatus != 'MY PROJECTS') {
         onChangeMyProjectsRoutes()
      } else {
         return null
      }
   }

   onChangeWeeklyMenu = () => {
      const { onChangeWeeklyMenuRoutes, tabBarStatus } = this.props
      if (tabBarStatus != 'Weekly Menu') {
         onChangeWeeklyMenuRoutes()
      } else {
         return null
      }
   }

   render() {
      const {
         signOut,
         toggleDisplayCart,
         tabBarStatus,
         shouldDisplayCart,
         toggleModal,
         shouldDisplayModal
      } = this.props
      return (
         <TopBar>
            <img src={header.ibhubsLogoURL}></img>
            <Button
               state={tabBarStatus == 'MY PROJECTS'}
               text={CommonHeader.MyProjects}
               onClick={this.onChangeMyProjects}
               dataTestId='myprojects-button'
               {...{ ButtonStyles }}
            />
            <HeaderNotify>
               <SwitchIn>
                  <Incampus state={this.state.checked}>
                     {this.state.checked ? 'In Campus' : 'Off Campus'}
                  </Incampus>
                  <label htmlFor='material-switch'>
                     <Switch
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        onColor='#86d3ff'
                        onHandleColor='#2693e6'
                        handleDiameter={25}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                        height={25}
                        width={48}
                        className='react-switch'
                        id='material-switch'
                     />
                  </label>
               </SwitchIn>
               <Button
                  state={tabBarStatus == 'HOME'}
                  text={CommonHeader.Home}
                  onClick={this.onChangeHome}
                  dataTestId='Home-button'
                  {...{ ButtonStyles }}
               />
               <Button
                  state={tabBarStatus == 'Weekly Menu'}
                  text={CommonHeader.WeeklyMenu}
                  onClick={this.onChangeWeeklyMenu}
                  dataTestId='Home-button'
                  ButtonStyles={ButtonStyles}
               />
               <Profile
                  {...{
                     shouldDisplayCart,
                     toggleDisplayCart,
                     signOut,
                     toggleModal
                  }}
               />
               <Notification {...{ shouldDisplayModal, toggleModal }} />
               <NotificationIcon onClick={toggleModal}>
                  <GoBell size={24} />
                  <NotifyNum>1</NotifyNum>
               </NotificationIcon>
               <SignOut>
                  <SignOutbutton
                     data-testid={header.dataTextid}
                     src={header.profileImageURL}
                     alt={header.profileImageAlt}
                     onClick={toggleDisplayCart}
                     title='Sign Out'
                  ></SignOutbutton>
                  <ProfileSpan onClick={toggleDisplayCart}>Profile</ProfileSpan>
               </SignOut>
            </HeaderNotify>
         </TopBar>
      )
   }
}

export { Header }
