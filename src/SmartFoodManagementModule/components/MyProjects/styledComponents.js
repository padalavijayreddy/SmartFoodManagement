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

export const ParallelogramDiv = styled.div`
   display: flex;
   justify-content: center;
   overflow: hidden;
`

export const Newsimg = styled.img`
   position: absolute;
   right: 20px;
   left: 0px;
   border: 1px solid red;
   height: 200% !important;
   width: 136%;
   max-width: 1500px;
   -webkit-transform: skew(30deg);
   -moz-transform: skew(30deg);
   -o-transform: skew(30deg);
   transform: skew(30deg);
`

export const LineDiv = styled.div``

export const SubParallelogramDiv = styled.div`
   color: white;
   -webkit-transform: skew(30deg);
   -moz-transform: skew(30deg);
   -o-transform: skew(30deg);
   transform: skew(30deg);
   display: flex;
   align-self: center;
`
