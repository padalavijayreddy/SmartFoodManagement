import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {
   Typo16DarkBlueGreyHKGroteskMedium,
   Typo12SteelHKGroteskRegular
} from '../../../CommonModule/styleGuide/Typos'
import { colors } from '../../../CommonModule/components/themes/colors'
import { css } from '@emotion/core'

export const EachGlass = styled.div<{ status: boolean }>`
   background-color: ${props => (props.status == true ? '#1aa3ff' : 'white')};
   color: ${props => (props.status == true ? 'white' : '#1aa3ff')};
`
