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

export const Imagediv = styled.div`
   ${tw`flex flex-col justify-start text-black border-2 border-black w-1/4 h-1/2`}
`
export const HeadingDiv = styled.div`
   ${tw`flex justify-center items-center text-6xl text-white`}
   &:hover {
      text-shadow: 0 0 10px #3498db, 0 0 20px #3498db, 0 0 30px #3498db,
         0 0 40px #2980b9, 0 0 70px #2980b9, 0 0 80px #2980b9, 0 0 100px #2980b9,
         0 0 150px #2980b9;
   }
`

export const PortalDiv = styled.div`
   ${tw`flex w-full border-2 border-green-200`}
   padding-top:0px;
`
export const FacebookSlideBarDiv = styled.div`
   ${tw`w-1/4 border-2 border-red-200`}
   position:static;
   height: 100vh;
`
export const MainContentDiv = styled.div`
   ${tw`bg-white text-black`}
`

export const AdminButton = styled.div`
   ${tw`text-2xl items-center text-white flex justify-center`}
   font-family:Arial, Helvetica, sans-serif;
   margin-top: 50px;
   &:hover {
      text-shadow: 0 0 10px #3498db, 0 0 20px #3498db, 0 0 30px #3498db,
         0 0 40px #2980b9, 0 0 70px #2980b9, 0 0 80px #2980b9, 0 0 100px #2980b9,
         0 0 150px #2980b9;
   }
`
