import React from 'react'
import { LoginButton } from './styledComponents'
import Loader from '../../common/Icons/Loader/SvgFile'
import { ButtonStyles } from '../../../AuthenticationModule/components/LoginPage/LoginPageStyle'

export const Button = props => {
   const { text, onClick, isLoading, ...otherProps } = props
   const isClickable = onClick ? true : false
   let passOnProps = isClickable
      ? { ...otherProps, onClick, isClickable }
      : otherProps
   return (
      <LoginButton {...passOnProps}>
         {isLoading ? <Loader fill='white' height={25} width={25} /> : text}
      </LoginButton>
   )
}

Button.defaultProps = {
   text: 'SUBMIT',
   disabled: false,
   isLoading: false,
   state: false
}

export default Button
