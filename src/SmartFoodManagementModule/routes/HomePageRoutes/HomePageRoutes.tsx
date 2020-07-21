import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { FoodManagementHomePage } from '../../components/FoodManagementHomePage'
import { AuthStore } from '../../../AuthenticationModule/stores/AuthStore'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'
import { RouteComponentProps } from 'react-router-dom'

interface HomePageRoutesProps extends RouteComponentProps {}

interface InjectedProps extends HomePageRoutesProps {
   authStore: AuthStore
}

@inject('authStore')
@observer
class HomePageRoutes extends React.Component<HomePageRoutesProps> {
   @observable shouldDisplayCart!: boolean

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthStore = () => {
      return this.getInjectedProps().authStore
   }

   toggleDisplayCart = () => {
      {
         this.shouldDisplayCart = this.shouldDisplayCart ? false : true
      }
   }

   signOut = () => {
      this.getAuthStore().userSignOut()
      const { history } = this.props
      history.replace(LOGIN_PATH)
   }

   render() {
      const { shouldDisplayCart, toggleDisplayCart, signOut } = this
      return (
         <FoodManagementHomePage
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
            signOut={signOut}
         />
      )
   }
}

export { HomePageRoutes }
