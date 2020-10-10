import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/themes/colors'
import {
   Typo32DarkBlueGreyHKGroteskMedium,
   Typo18SteelHKGroteskMedium,
   Typo12CoolGreyHKGroteskRegular
} from '../../../CommonModule/styleGuide/Typos'
import { css } from '@emotion/core'

export const CardDiv = styled.div`
   position: absolute;
   ${tw`flex flex-col justify-center items-center z-10 bg-white rounded text-2xl p-10 w-1/2`}
   top: 350px;
   margin: 10px;
   border: 1px solid ${colors.darkBlueGrey};
`

export const MealDiv = styled.div`
   ${tw`flex flex-col m-2 justify-between w-1/2 self-start`}}
`

export const ButtonDiv = styled.div`
   ${tw`flex w-1/4 self-center items-start`}
`

export const IntialDiv = styled.div`
   ${tw`flex w-full justify-between m-10 items-center`}
`

export const MealTypeDiv = styled(Typo32DarkBlueGreyHKGroteskMedium)`
    ${tw``}
    border-bottom:1px solid ${colors.brightBlue};
    padding-bottom:10px;
`
export const ItemDiv = styled(Typo18SteelHKGroteskMedium)``

export const Categoryspan = styled(Typo12CoolGreyHKGroteskRegular)``

export const Unitspan = styled(Typo12CoolGreyHKGroteskRegular)`
   ${tw`flex flex-col w-1/4 items-center self-center`}
`

export const SkipButton = css`
   ${tw` flex justify-center text-center rounded focus:outline-none hover:bg-blue-900 hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 102px;
   height: 40px;
   border-radius: 4px;
   background-color: 'white';
   border: 1px solid #d7dfe9;
   cursor: 'pointer';
   padding-top: 12px;
   font-size: 14px;
   margin-left: 10px;
`

export const CountStyles = css`
   ${tw` flex justify-center self-center text-center rounded focus:outline-none hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 100px;
   height: 35px;
   border-radius: 2px;
   background-color: 'white';
   border: 1px solid #d7dfe9;
   padding-top: 10px;
   font-size: 14px;
   &:hover {
      background-color: #0058e3;
   }
`
export const Button = styled.button`
   color: ${props => (props.className == true ? pink : red)};
`

export const DateDiv = styled.div`
   ${tw`flex justify-start w-full`}
`

export const SecondDiv = styled.div`
   ${tw`flex w-full justify-center m-10 items-center`}
`

export const TabBarDiv = styled.div`
   ${tw`flex w-full justify-start m-0 p-0 items-center`}
`
export const ButtonsDiv = styled.div`
   ${tw`flex w-full justify-center items-center`}
`

export const QuantityStatusStyles = styled.div`
   ${tw` flex justify-center self-center text-center focus:outline-none hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 100px;
   height: 35px;
   background-color: 'white';
   padding-top: 10px;
   font-size: 14px;
   border: 1px solid #d7dfe9;
   text-align: center;
   &:hover {
      background-color: black;
      color: white;
   }
`

export const MealStatusStyles = css`
   ${tw` flex justify-center self-center text-center rounded focus:outline-none hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 102px;
   height: 40px;
   border-radius: 4px;
   background-color: 'white';
   border: 1px solid #d7dfe9;
   cursor: 'pointer';
   padding-top: 12px;
   font-size: 14px;
   &:hover {
      background-color: #0058e3;
   }
`
export const SaveButtonStyles = css`
   ${tw`flex justify-center text-center text-white rounded focus:outline-none hover:bg-green-900 hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   background: #1db05f;
   cursor: 'pointer';
   padding-top: 12px;
   width: 102px;
   height: 40px;
   font-size: 14px;
   color: 'white';
   margin-left: 10px;
`

export const MainButtonDiv = styled.div`
   ${tw`flex justify-between items-start w-full`}
   margin-right: 70px;
`
