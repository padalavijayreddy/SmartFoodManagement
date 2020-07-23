import React, { Component } from 'react'
import { BannerAnimation } from '../../../CommonModule/components/BannerAnimation'
import { WeeklyFoodWastage } from '../../../CommonModule/components/WeeklyFoodWastage'
import BannerDataModel from '../../stores/models/BannerDataModel'
import {
   HomeMainDiv,
   HomeBannerDiv,
   HomeWeeklyStats,
   HomeDate,
   CardDiv,
   SubCardDiv,
   Div1,
   Div2,
   Div3
} from './styledComponents'
import { DatePicker } from '../../../CommonModule/components/DatePicker/DatePicker'
import LoadingWrapperWithFailure from '../../../CommonModule/common/LoadingWrapperWithFailure'
import MenuItemsModel from '../../stores/models/MenuItemsModel'
import NoDataView from '../../../CommonModule/common/NoDataView'

interface HomeProps {
   bannerDataList: Array<BannerDataModel>
   getBannerDataAPIStatus: string
   getBannerDataAPIError: string
   doNetworkCalls: () => void
   menuItemsList: Array<MenuItemsModel>
   getMenuItemsAPIStatus: string
   getMenuItemsAPIError: string
}

interface HomeVars {
   cardList: () => void
}

const MealTypeList = ['BreakFast', 'Lunch', 'Dinner']

class Home extends Component<HomeProps, HomeVars> {
   renderMenuItemList = () => {
      const { menuItemsList } = this.props
      if (menuItemsList.length === 0) {
         return <NoDataView />
      } else {
         return menuItemsList.map(eachMeal => {
            return (
               <SubCardDiv>
                  <Div1>{eachMeal.mealPreference}</Div1>
                  <Div2>{eachMeal.endTime}</Div2>
                  <Div3>{eachMeal.startTime}</Div3>
               </SubCardDiv>
            )
         })
      }
   }

   render() {
      const {
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls,
         menuItemsList,
         getMenuItemsAPIStatus,
         getMenuItemsAPIError
      } = this.props

      return (
         <HomeMainDiv>
            <HomeBannerDiv>
               <BannerAnimation
                  bannerDataList={bannerDataList}
                  getBannerDataAPIStatus={getBannerDataAPIStatus}
                  getBannerDataAPIError={getBannerDataAPIError}
                  doNetworkCalls={doNetworkCalls}
               />
            </HomeBannerDiv>
            <HomeWeeklyStats>
               <WeeklyFoodWastage />
            </HomeWeeklyStats>
            <HomeDate>
               <DatePicker />
            </HomeDate>
            <CardDiv>
               <LoadingWrapperWithFailure
                  apiStatus={getMenuItemsAPIStatus}
                  apiError={getMenuItemsAPIError}
                  onRetryClick={doNetworkCalls}
                  renderSuccessUI={this.renderMenuItemList}
               />
            </CardDiv>
         </HomeMainDiv>
      )
   }
}

export { Home }

{
   /* <CardDiv>
               <SubCardDiv>
                  <FirstDiv>
                     <Image></Image>
                     <FoodType></FoodType>
                  </FirstDiv>
                  <SecondDiv>
                     <Button></Button>
                  </SecondDiv>
               </SubCardDiv>
            </CardDiv> 
            {MealTypeList.map(eachMeal => {
                  return (
                     <SubCardDiv>
                        <Div1>1</Div1>
                        <Div2>2</Div2>
                        <Div3>3</Div3>
                     </SubCardDiv>
                  )
               })}
            */
}
