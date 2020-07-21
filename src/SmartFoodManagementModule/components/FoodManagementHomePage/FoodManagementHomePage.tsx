import React, { Component } from 'react'
import { Header } from '../../../CommonModule/components/Header'
import { observer } from 'mobx-react'

interface HomePageProps {
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   signOut: () => void
}

@observer
class FoodManagementHomePage extends Component<HomePageProps> {
   render() {
      const { shouldDisplayCart, toggleDisplayCart, signOut } = this.props
      return (
         <div>
            <Header
               toggleDisplayCart={toggleDisplayCart}
               shouldDisplayCart={shouldDisplayCart}
               signOut={signOut}
            />
         </div>
      )
   }
}

export { FoodManagementHomePage }
