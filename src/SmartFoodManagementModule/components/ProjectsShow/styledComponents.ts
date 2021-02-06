import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {
   Typo16DarkBlueGreyHKGroteskMedium,
   Typo12SteelHKGroteskRegular
} from '../../../CommonModule/styleGuide/Typos'
import { colors } from '../../../CommonModule/components/themes/colors'
import { css } from '@emotion/core'

export const ProjectButtonStyles = css`
   ${tw` flex justify-center self-center text-center rounded focus:outline-none hover:bg-blue-900 hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 100px;
   height: 35px;
   border-radius: 4px;
   border: 1px solid #d7dfe9;
   padding-top: 10px;
   font-size: 14px;
   background-color: #8ab0ed;
   &:hover {
      border-radius: 4px;
   }
`

export const CardDiv = styled.div`
   ${tw`flex justify-between h-full w-full flex-wrap`}
`
export const Card = styled.div<{ state: string }>`
   ${tw`shadow-2xl m-5 h-64 w-1/4 flex flex-col justify-between rounded-lg hover:w-1/4 p-5`}
   background-image: url(${props => props.state});
   &:hover {
      margin:10px;
   }
   transition:0.3s;
`
export const Header = styled(Typo16DarkBlueGreyHKGroteskMedium)`
   font-size: 24px;
   text-align: center;
   font-weight: bold;
`
