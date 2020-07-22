import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/themes/colors'
import { Typo20BlackHKGroteskMedium } from '../../styleGuide/Typos'
import { css } from '@emotion/core'

export const TopBar = styled.div`
      ${tw`flex justify-between`}
      border-bottom: 1px solid lightgrey;
      ${tw`w-full`}
      height:72px;
      background-color: ${colors.white};
   `,
   SignOutbutton = styled.img`
      ${tw`border-gray-800 m-2 cursor-pointer h-12 w-12 p-1 rounded text-xs`}
      border-radius:50%;
   `,
   NotificationIcon = styled.img`
      width: 25px;
      height: 25px;
   `,
   HeaderNotify = styled.div`
      display: flex;
      width: 30%;
      justify-content: space-between;
      align-items: center;
   `,
   ButtonStyles = css`
      ${tw`hover:text-blue-600`}
      width: 143px;
      height: 50px;
      font-family: HKGrotesk;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: normal;
      color: #171f46;
   `
