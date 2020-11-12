import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {
   ProfileDiv,
   DeleteButton,
   ProfileImage,
   AccountCenterDiv,
   EmailId,
   AccountCenterP,
   ProfileMainDiv,
   SignoutButton,
   UserOptions,
   Option,
   AccountCenter,
   BorderButton,
   NotificationIcon,
   NotifyNum
} from './ProfileStyle'
import { header } from '../../i18nStrings/strings.json'
import { FiSettings, FiThumbsUp, FiFacebook } from 'react-icons/fi'
import { AiOutlineShareAlt, AiOutlineContacts } from 'react-icons/ai'
import { GoSignOut } from 'react-icons/go'
import { FcAdvance } from 'react-icons/fc'
import { GoBell } from 'react-icons/go'

@observer
class Profile extends React.Component {
   hideCart = () => {
      const { toggleDisplayCart } = this.props
      toggleDisplayCart()
   }

   render() {
      const { shouldDisplayCart, signOut, toggleModal } = this.props
      return (
         <ProfileDiv {...{ shouldDisplayCart }}>
            <DeleteButton
               data-testid='cart-close-button'
               onClick={this.hideCart}
            >
               <FcAdvance />
            </DeleteButton>
            <ProfileMainDiv>
               <AccountCenterDiv>
                  <ProfileImage src={header.profileImageURL}></ProfileImage>
                  <AccountCenter>
                     <AccountCenterP>Account Center</AccountCenterP>
                     <EmailId>@vijayReddyPadala</EmailId>
                  </AccountCenter>
                  <NotificationIcon onClick={toggleModal}>
                     <GoBell size={24} />
                     <NotifyNum>1</NotifyNum>
                  </NotificationIcon>
               </AccountCenterDiv>
               <UserOptions>
                  <Option>
                     Settings <FiSettings />
                  </Option>
                  <Option>
                     Rate Us <FiThumbsUp />
                  </Option>
                  <Option>
                     Facebook <FiFacebook />
                  </Option>
                  <Option>
                     Contact Us <AiOutlineContacts />
                  </Option>
                  <Option>
                     Do Share <AiOutlineShareAlt />
                  </Option>
               </UserOptions>
               <BorderButton>
                  <SignoutButton onClick={signOut}>
                     SIGN OUT <GoSignOut />
                  </SignoutButton>
               </BorderButton>
            </ProfileMainDiv>
         </ProfileDiv>
      )
   }
}

export { Profile }
