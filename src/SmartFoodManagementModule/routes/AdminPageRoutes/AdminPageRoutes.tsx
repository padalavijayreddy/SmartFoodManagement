import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { AuthStore } from '../../../AuthenticationModule/stores/AuthStore'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'
import { RouteComponentProps } from 'react-router-dom'
import { SmartFoodManagementStore } from '../../stores/SmartFoodManagementStore'
import {
   SMART_FOOD_MANAGEMENT_HOME_PATH,
   MY_PROJECTS
} from '../../constants/NavigationConstants'
import AdminPortal from '../../components/AdminPortal'

interface AdminPageRoutesProps extends RouteComponentProps {}

interface InjectedProps extends AdminPageRoutesProps {
   authStore: AuthStore
   smartFoodManagementStore: SmartFoodManagementStore
}

@inject('authStore', 'smartFoodManagementStore')
@observer
class AdminPageRoutes extends React.Component<AdminPageRoutesProps> {
   @observable shouldDisplayCart!: boolean
   @observable tabBarStatus!: string
   @observable shouldDisplayModal!: boolean
   @observable shouldDisplaySideBar!: boolean

   constructor(props) {
      super(props)
      this.shouldDisplayCart = false
      this.shouldDisplayModal = false
      this.shouldDisplaySideBar = false
      this.tabBarStatus = 'Weekly Menu'
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthStore = () => {
      return this.getInjectedProps().authStore
   }

   getSmartFoodManagementStore = () => {
      return this.getInjectedProps().smartFoodManagementStore
   }

   toggleDisplayCart = () => {
      {
         this.shouldDisplayCart = this.shouldDisplayCart ? false : true
      }
   }

   toggleDisplaySideBar = () => {
      {
         this.shouldDisplaySideBar = this.shouldDisplaySideBar ? false : true
      }
   }

   toggleDisplayCartFalse = () => {
      this.shouldDisplayCart = false
   }

   toggleModal = () => {
      {
         this.shouldDisplayModal = this.shouldDisplayModal ? false : true
      }
   }

   onChangeHomePageRoutes = () => {
      const { history } = this.props
      history.push(SMART_FOOD_MANAGEMENT_HOME_PATH)
   }

   onChangeMyProjectsRoutes = () => {
      const { history } = this.props
      history.push(MY_PROJECTS)
   }

   signOut = () => {
      this.getAuthStore().userSignOut()
      const { history } = this.props
      history.replace(LOGIN_PATH)
   }

   render() {
      const {
         shouldDisplayCart,
         toggleDisplayCart,
         onChangeHomePageRoutes,
         onChangeMyProjectsRoutes,
         shouldDisplayModal,
         toggleModal,
         signOut,
         tabBarStatus,
         toggleDisplayCartFalse,
         shouldDisplaySideBar,
         toggleDisplaySideBar
      } = this
      return (
         <AdminPortal
            shouldDisplaySideBar={shouldDisplaySideBar}
            toggleDisplaySideBar={toggleDisplaySideBar}
            toggleDisplayCartFalse={toggleDisplayCartFalse}
            tabBarStatus={tabBarStatus}
            toggleDisplayCart={toggleDisplayCart}
            shouldDisplayCart={shouldDisplayCart}
            signOut={signOut}
            toggleModal={toggleModal}
            shouldDisplayModal={shouldDisplayModal}
            onChangeHomePageRoutes={onChangeHomePageRoutes}
            onChangeMyProjectsRoutes={onChangeMyProjectsRoutes}
         />
      )
   }
}

export { AdminPageRoutes }
