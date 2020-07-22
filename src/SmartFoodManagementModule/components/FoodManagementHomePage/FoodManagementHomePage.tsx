import React, { Component } from 'react'
import { Header } from '../../../CommonModule/components/Header'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'

interface HomePageProps {
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   signOut: () => void
   tabBarStatus: string
   onChangeWeeklyMenuRoutes: () => void
}

@observer
class FoodManagementHomePage extends Component<HomePageProps> {
   render() {
      return <Home />
   }
}

export default WithHeaderComponent(FoodManagementHomePage)
