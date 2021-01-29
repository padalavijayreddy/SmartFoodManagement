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
   ${tw`text-2xl items-center text-white flex justify-center`}
   font-family:Arial, Helvetica, sans-serif;
   margin-top: 50px;
   &:hover {
      text-shadow: 0 0 10px #3498db, 0 0 20px #3498db, 0 0 30px #3498db,
         0 0 40px #2980b9, 0 0 70px #2980b9, 0 0 80px #2980b9, 0 0 100px #2980b9,
         0 0 150px #2980b9;
   }
`

export const ParallelogramParentDiv = styled.div`
   display: flex;
   justify-content: center;
   height: 100%;
   width: 100%;
   border: 2px solid green;
`

export const ParallelogramDiv = styled.div`
   display: flex;
   height: 100%;
   width: 50% !important;
   overflow: hidden;
`
export const SubParallelogramDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100% !important;
   width: 70% !important;
   padding-left: 20px;
   -webkit-transform: skew(30deg);
   -moz-transform: skew(30deg);
   -o-transform: skew(30deg);
   transform: skew(30deg);
`

export const LineDiv = styled.div`
   height: 250px;
   border: 1px solid black;
`

export const Newsimg = styled.img`
   height: 200% !important;
   width: 50% !important;
   -webkit-transform: skew(30deg);
   -moz-transform: skew(30deg);
   -o-transform: skew(30deg);
   transform: skew(30deg);
   display: flex;
`
