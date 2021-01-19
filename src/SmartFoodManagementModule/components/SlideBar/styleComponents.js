import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {
   Typo16DarkBlueGreyHKGroteskMedium,
   Typo32DarkBlueGreyRubikRegular,
   Typo12SteelHKGroteskRegular
} from '../../../CommonModule/styleGuide/Typos'
import { colors } from '../../../CommonModule/components/themes/colors'
import { css } from '@emotion/core'

const {
   jade,
   lightBlueGrey,
   yellowOrange,
   red,
   ice,
   offWhite,
   redInside
} = colors

export const SlidebarDiv = styled.div`
   ${tw`flex flex-col justify-center items-center text-xl sticky z-1 w-1/4 text-red-400`}
   transition: width 0.3s;
   background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
   width: ${props => (!props.shouldDisplaySideBar ? '0%' : '20%')};
   height: calc(100vh + 72px);
   position: fixed;
   overflow-y: scroll;
   overflow-x: hidden;
   scroll-behavior: smooth;
   /* background-color: rgb(27, 43, 80); */
`

export const SlideBarSubDiv = styled.div`
   ${tw`flex`}
`
