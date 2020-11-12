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

export const PortalDiv = styled.div`
   ${tw`flex w-full min-h-screen`}
   padding-top: 72px;
   color: white;
   background-color: white;
   /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); */
`
export const MainContentDiv = styled.div`
   ${tw`flex justify-center w-full text-black`}
`
export const HeaderContent = styled.div`
   ${tw`flex items-center self-start w-full h-16`}
   box-shadow: 1px 2px 5px 5px lightgray;
   padding-left: 50px;
`
export const AdminPortalP = styled(Typo32DarkBlueGreyRubikRegular)`
   ${tw``}
   margin-left:50px;
`
