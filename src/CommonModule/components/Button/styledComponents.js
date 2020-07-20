import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledButton = styled.button`
    ${tw`px-4 py-2 m-2 w-14 bg-blue-500 text-white rounded-lg`}
    cursor: ${props => (props.isClickable ? 'pointer' : 'none')};
    ${props => props.css}
`

export const LoginButton = styled.button`
    {
      ${tw` flex justify-center text-center text-white rounded focus:outline-none focus:shadow-outline`}
      background:#0b69ff;
      cursor: 'pointer';
      padding: 8px 16px;
      width: 270px;
      font-size: 14px;
      height: 35px;
   }
`
