import React, { Component } from 'react'
import { BannerAnimation } from '../../../CommonModule/components/BannerAnimation'
import { WeeklyFoodWastage } from '../../../CommonModule/components/WeeklyFoodWastage'

class Home extends Component {
   render() {
      return (
         <div>
            <BannerAnimation />
            <WeeklyFoodWastage />
         </div>
      )
   }
}

export { Home }
