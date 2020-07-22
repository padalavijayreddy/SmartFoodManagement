import React, { Component } from 'react'
import { Header } from '../../../CommonModule/components/Header'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import { observable } from 'mobx'
import { Home } from '../Home/Home'

interface WeeklyMenuProps {
   shouldDisplayCart: boolean
   toggleDisplayCart: () => void
   signOut: () => void
   tabBarStatus: string
   onChangeHomePageRoutes: () => void
}

@observer
class FoodManagementWeeklyMenu extends Component<WeeklyMenuProps> {
   render() {
      return <div>Vijay Reddy Padala</div>
   }
}

export default WithHeaderComponent(FoodManagementWeeklyMenu)
