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
${tw`flex sticky left-0 z-10 w-1/4 text-red-400`}
width:${props => (!props.shouldDisplaySideBar ? '0%' : '')};
transition: width 0.3s;
background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`
