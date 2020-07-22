import React from 'react'
import { LoginButton } from './styledComponents'
import Loader from '../../common/Icons/Loader/SvgFile'
import { ButtonStyles } from '../../../AuthenticationModule/components/LoginPage/LoginPageStyle'

export const Button = ({
   text,
   disabled,
   onClick,
   dataTestId,
   ButtonStyles,
   isLoading,
   state
}) => {
   return (
      <LoginButton
         state={state}
         disabled={disabled}
         onClick={onClick}
         data-testid={dataTestId}
         ButtonStyles={ButtonStyles}
      >
         {isLoading ? <Loader fill='white' height={25} width={25} /> : text}
      </LoginButton>
   )
}

Button.defaultProps = {
   SignIntext: 'SUBMIT',
   disabled: false,
   isLoading: false,
   state: false
}

export default Button
