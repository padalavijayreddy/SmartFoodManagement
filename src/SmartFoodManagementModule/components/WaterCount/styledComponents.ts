import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {
   Typo16DarkBlueGreyHKGroteskMedium,
   Typo32DarkBlueGreyRubikRegular,
   Typo12SteelHKGroteskRegular
} from '../../../CommonModule/styleGuide/Typos'
import { colors } from '../../../CommonModule/components/themes/colors'
import { css } from '@emotion/core'

export const EmptySpace = styled.div<{ emptyHeight: number }>`
   height: ${props => props.emptyHeight}%;
   border: 2px solid red;
`

export const FilledSpace = styled.div<{ filledHeight: number }>`
   height: ${props => props.filledHeight}%;
   background-color: #1aa3ff;
`
