import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/themes/colors'
import {
   Typo20BlackHKGroteskMedium,
   Typo20DarkBlueGreyHKGrotesk,
   Typo14SteelHKGroteskRegular
} from '../../styleGuide/Typos'
import { css } from '@emotion/core'

export const TopBar = styled.div`
      ${tw`flex justify-between`}
      border-bottom: 1px solid lightgrey;
      ${tw`w-full`}
      height:72px;
      background-color: ${colors.white};
   `,
   SignOutbutton = styled.img`
      ${tw`border-gray-800 cursor-pointer h-12 w-12 rounded text-xs`}
      border-radius: 50%;
   `,
   NotificationIcon = styled.img`
      width: 25px;
      height: 25px;
   `,
   HeaderNotify = styled.div`
      display: flex;
      width: 40%;
      justify-content: space-between;
      align-items: center;
   `,
   ButtonStyles = css`
      ${tw`hover:text-blue-600 hover:bg-blue-100`}
      width: 143px;
      height: 50px;
      font-family: HKGrotesk;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: normal;
      border: none;
   `,
   Incampus = styled(Typo20DarkBlueGreyHKGrotesk)`
      ${tw`hover:text-blue-600`}
      display:flex;
      color: ${props => (props.state ? '#0099ff' : '#171f46')};
      margin-right: 20px;
      align-self: center;
      padding-bottom: 5px;
   `,
   SwitchIn = styled.div`
      display: flex;
      width: 30%;
      height: 100%;
      justify-content: center;
      align-items: center;
   `,
   ProfileSpan = styled(Typo14SteelHKGroteskRegular)`
      display: flex;
      align-self: center;
      margin-left: 10px;
      font-size: 22px;
      ${tw`hover:text-blue-600`}
   `,
   SignOut = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
   `
