import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../themes/colors'

const { steel, white, neonRed, neonRed5 } = colors

export const Input = styled.input`
   ${tw`w-full`}
   height: 90%;
   font-size: 12px;
   padding: 5px;
   background-color: transparent;
   outline: none;
`
