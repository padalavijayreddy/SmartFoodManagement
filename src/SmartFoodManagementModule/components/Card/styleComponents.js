import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/themes/colors'
import { Typo32DarkBlueGreyHKGroteskMedium } from '../../../CommonModule/styleGuide/Typos'

export const CardDiv = styled.div`
   position: absolute;
   ${tw`flex flex-col z-10 bg-white rounded text-2xl p-10 w-1/2`}
   top: 350px;
   margin: 10px;
   border: 1px solid ${colors.darkBlueGrey};
`
export const IntialDiv = styled.div`
   ${tw`flex w-full justify-between items-center`}
`
export const BreakFastDiv = styled(Typo32DarkBlueGreyHKGroteskMedium)`
    ${tw``}
    border-bottom:1px solid ${colors.darkBlueGrey};
    padding-bottom:10px;
`

export const SkipButton = styled.button``
