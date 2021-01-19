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
   ${tw`flex min-h-screen`}
   padding-top: 72px;
   color: white;
   background-color: white;
   width: ${props => (!props.shouldDisplaySideBar ? '100%' : '80%')};
   margin-left: ${props => (!props.shouldDisplaySideBar ? '' : '20%')};
   /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); */
`
export const MainContentDiv = styled.div`
   ${tw`flex flex-col items-center min-h-screen w-full text-black`}
`
export const HeaderContent = styled.div`
   ${tw`flex items-center self-start w-full h-16`}
   box-shadow: 1px 2px 5px 5px lightgray;
   padding-left: 72px;
`
export const AdminPortalP = styled(Typo32DarkBlueGreyRubikRegular)`
   ${tw``}
   margin-left:50px;
`
export const VideoDiv = styled.div`
   ${tw``}
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 70%;
   height: 100%;
   margin-top: 10px;
`
export const UserSubmissionDiv = styled.div`
   ${tw``}
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding-top: 10px;
`
export const UserSubmissionColDiv = styled.div`
   ${tw``}
   display: flex;
   flex-direction: column;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding-top: 10px;
   border: 1px solid black;
`
