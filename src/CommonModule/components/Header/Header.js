import React from 'react'
import {
   TopBar,
   SignOutbutton,
   NotificationIcon,
   HeaderNotify
} from './HeaderStyle'
import { header } from '../../i18nStrings/strings.json'
import { Profile } from '../Profile'
import { Notification } from '../Notification'
import { toast, Zoom } from 'react-toastify'

toast.configure({
   background: 'black',
   position: 'center'
})

class Header extends React.Component {
   render() {
      const { signOut, toggleDisplayCart, shouldDisplayCart } = this.props
      const { notify } = this
      return (
         <TopBar>
            <img src={header.ibhubsLogoURL}></img>
            <HeaderNotify>
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
