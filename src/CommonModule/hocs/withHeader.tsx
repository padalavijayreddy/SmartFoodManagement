import React from 'react'
import { render } from '@testing-library/react'
import { StyledHeader, HeaderWrapper, Logo } from './styledComponents'
import { Header } from '../components/Header'

function WithHeaderComponent<T>(WrappedComponent: React.ComponentType<T>) {
   return class WithHeader extends React.Component<T> {
      render() {
         const props = this.props as T
         return (
            <HeaderWrapper>
               <Header {...props} />
               <WrappedComponent {...this.props} />
            </HeaderWrapper>
         )
      }
   }
}

export default WithHeaderComponent
