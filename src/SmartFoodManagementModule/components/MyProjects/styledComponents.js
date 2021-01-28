import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {
   Typo16DarkBlueGreyHKGroteskMedium,
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

export const ProjectDiv = styled.div`
   ${tw` flex justify-center text-black w-1/4 border-2 border-red-200`}
   position:absolute;
   height: 100vh;
   margin: 10px;
   margin-top: 150px;
`
