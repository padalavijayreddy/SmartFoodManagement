import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {
   Typo16DarkBlueGreyHKGroteskMedium,
   Typo32DarkBlueGreyRubikRegular,
   Typo12SteelHKGroteskRegular
} from '../../../CommonModule/styleGuide/Typos'
import { colors } from '../../../CommonModule/components/themes/colors'
import { css } from '@emotion/core'

export const MainDiv = styled.div<{ direction: string }>`
   height: 500px;
   width: 98vw;
   border: 1px solid black;
   margin: 10px;
   display: flex;
   position: relative;
   top: 350px;
   flex-direction: ${props =>
      props.direction == 'row'
         ? 'row'
         : props.direction == 'row-reverse'
         ? 'row-reverse'
         : 'row'};
`

export const LeftDiv = styled.div<{ state: string; height: number }>`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: ${props => props.height}%;
   width: 50%;
   border: 1px solid blue;
   background-color: ${props =>
      props.state == 'RED'
         ? '#b30000'
         : props.state == 'BLUE'
         ? '#0080ff'
         : props.state == 'GREEN'
         ? 'green'
         : 'white'};
`

export const RightDiv = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 50%;
   border: 1px solid red;
   padding: 10px;
   padding-top: 50px;
`

export const TopSideDiv = styled.div<{ state: string }>`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   height: 30%;
   width: 100%;
   border: 1px solid green;
   background-color: ${props =>
      props.state == 'RED'
         ? '#b30000'
         : props.state == 'BLUE'
         ? '#0080ff'
         : props.state == 'GREEN'
         ? 'green'
         : 'white'};
`

export const CenterSideDiv = styled.div<{ state: string }>`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   height: 30%;
   width: 100%;
   border: 1px solid green;
   background-color: ${props =>
      props.state == 'RED'
         ? '#b30000'
         : props.state == 'BLUE'
         ? '#0080ff'
         : props.state == 'GREEN'
         ? 'green'
         : 'white'};
`

export const BottomSideDiv = styled.div<{ state: string }>`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   height: 30%;
   width: 100%;
   border: 1px solid green;
   background-color: ${props =>
      props.state == 'RED'
         ? '#b30000'
         : props.state == 'BLUE'
         ? '#0080ff'
         : props.state == 'GREEN'
         ? 'green'
         : 'white'};
`

export const ColorDiv = styled.div`
   display: flex;
   justify-content: center;
`

export const EachDiv = styled.div`
   display: flex;
   justify-content: center;
   border: 1px solid black;
   height: 30px;
   width: 60px;
   cursor: pointer;
`

export const Arrows = styled.div`
   display: flex;
   justify-content: center;
`

export const Arrows1 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`

export const Arrow = styled.i`
   font-size: 36px;
   padding: 2px;
   cursor: pointer;
`
