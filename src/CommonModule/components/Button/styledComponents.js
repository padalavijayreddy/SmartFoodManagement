import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledButton = styled.button`
    ${tw`px-4 py-2 m-2 w-14 bg-blue-500 text-white rounded-lg`}
    cursor: ${props => (props.isClickable ? 'pointer' : 'none')};
    ${props => props.css}
`

export const LoginButton = styled.button`
   ${props => props.ButtonStyles}
   color: ${props => (props.state ? '#0099ff' : '#171f46')};

`
