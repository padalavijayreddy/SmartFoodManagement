import React from 'react'
import {
   TopBar,
   SignOutbutton,
   NotificationIcon,
   HeaderNotify,
   ButtonStyles
} from './HeaderStyle'
import { header } from '../../i18nStrings/strings.json'
import { Profile } from '../Profile'
import { Notification } from '../Notification'
import { toast, Zoom } from 'react-toastify'
import Button from '../Button/Button'
import { CommonHeader } from '../../i18nStrings/strings.json'

class Header extends React.Component {
   onChangeHome = () => {
      alert('HOME PAGE')
   }

   onChangeWeeklyMenu = () => {
      alert('Weekly Menu')
   }

   render() {
      const { signOut, toggleDisplayCart, shouldDisplayCart } = this.props
      return (
         <TopBar>
            <img src={header.ibhubsLogoURL}></img>
            <HeaderNotify>
               <Button
                  text={CommonHeader.Home}
                  onClick={this.onChangeHome}
                  dataTestId='Home-button'
                  {...{ ButtonStyles }}
               />
               <Button
                  text={CommonHeader.WeeklyMenu}
                  onClick={this.onChangeWeeklyMenu}
                  dataTestId='Home-button'
                  ButtonStyles={ButtonStyles}
               />
               <Profile
                  {...{ shouldDisplayCart, toggleDisplayCart, signOut }}
               />
               <SignOutbutton
                  data-testid={header.dataTextid}
                  src={header.profileImageURL}
                  alt={header.profileImageAlt}
                  onClick={toggleDisplayCart}
                  title='Sign Out'
               ></SignOutbutton>
            </HeaderNotify>
         </TopBar>
      )
   }
}

export { Header }
