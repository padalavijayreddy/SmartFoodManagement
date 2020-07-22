import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo32DarkBlueGreyHKGroteskMedium } from '../../styleGuide/Typos'

export const MainDiv = styled.div`
   padding-top: 30px;
   padding-left: 150px;
   padding-right: 150px;
   border: 1px solid black;
   height: 700px;
`
export const SubDiv = styled(Typo32DarkBlueGreyHKGroteskMedium)`
   width: 300px;
   border-bottom: 1px solid black;
   margin-bottom: 30px;
`
export const OverViewDiv = styled.div`
   display: flex;
   border: 1px solid grey;
   height: 60%;
   border-radius: 10px;
`
