import React, { Component } from 'react'
import { Header } from '../../../CommonModule/components/Header'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'

interface HomePageProps {
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   signOut: () => void
}

@observer
class FoodManagementHomePage extends Component<HomePageProps> {
   render() {
      return <div>vijay</div>
   }
}

export default WithHeaderComponent(FoodManagementHomePage)
