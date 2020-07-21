import React from 'react'
import { LoginButton } from './styledComponents'
import Loader from '../../common/Icons/Loader/SvgFile'

export const Button = ({ isLoading, onSubmit, SignIntext, ButtonStyles }) => {
   const isClickable = onSubmit ? true : false
   return (
      <LoginButton
         disabled={isLoading}
         data-testid='sign-in-button'
         onClick={onSubmit}
         type='button'
         ButtonStyles={ButtonStyles}
      >
         {isLoading ? (
            <Loader fill='white' height={25} width={25} />
         ) : (
            SignIntext
         )}
      </LoginButton>
   )
}

Button.defaultProps = {
   SignIntext: 'LOGIN'
}

export default Button
