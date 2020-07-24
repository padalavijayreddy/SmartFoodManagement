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
   Div1Side1,
   Div1Side2,
   Buttons,
   Div1Image,
   Div1TypeTime,
   Div1Type,
   Div1Time,
   Div2,
   Div2Slide1,
   Div2Slide2,
   EachItem,
   Div3,
   ButtonStyles
} from './styledComponents'
import { DatePicker } from '../../../CommonModule/components/DatePicker/DatePicker'
import LoadingWrapperWithFailure from '../../../CommonModule/common/LoadingWrapperWithFailure'
import MenuItemsModel from '../../stores/models/MenuItemsModel'
import NoDataView from '../../../CommonModule/common/NoDataView'
import { observer } from 'mobx-react'
import Button from '../../../CommonModule/components/Button/Button'

const MealTypeList = [
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/2a3afcdb-6b81-44d8-beba-9992afd72ed4.svg',
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/eb488d1e-9626-4181-8208-5506c4e5a60a.svg',
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/b9788c8e-9f46-4016-9c46-5d60fe9e9106.svg'
]

interface HomeProps {
   startDate: Date
   handleDateChange: (date: any) => void
   bannerDataList: Array<BannerDataModel>
   getBannerDataAPIStatus: string
   getBannerDataAPIError: string
   doNetworkCalls: () => void
   menuItemsList: Array<MenuItemsModel>
   getMenuItemsAPIStatus: string
   getMenuItemsAPIError: string
}

class Home extends Component<HomeProps> {
   renderMenuItemList = observer(() => {
      const { menuItemsList } = this.props
      if (menuItemsList.length === 0) {
         return <NoDataView />
      } else {
         return (
            <React.Fragment>
               {menuItemsList.map((eachMeal, index) => {
                  return (
                     <SubCardDiv>
                        <Div1>
                           <Div1Side1>
                              <Div1Image src={MealTypeList[index]} />
                              <Div1TypeTime>
                                 <Div1Type>{eachMeal.mealType}</Div1Type>
                                 <Div1Time>
                                    {eachMeal.startTime}&nbsp; <span> - </span>
                                    &nbsp; <span>{eachMeal.endTime}</span>
                                 </Div1Time>
                              </Div1TypeTime>
                           </Div1Side1>
                           <Div1Side2>
                              <Buttons className={eachMeal.mealPreference}>
                                 {eachMeal.mealPreference}
                              </Buttons>
                           </Div1Side2>
                        </Div1>
                        <Div2>
                           <Div2Slide1>
                              {eachMeal.itemsList.map((items, index) => {
                                 if (index % 2 == 0)
                                    return <EachItem>{items}</EachItem>
                              })}
                           </Div2Slide1>
                           <Div2Slide2>
                              {eachMeal.itemsList.map((items, index) => {
                                 if (index % 2 != 0)
                                    return <EachItem>{items}</EachItem>
                              })}
                           </Div2Slide2>
                        </Div2>
                        <Div3>
                           <Button
                              text='Edit'
                              onClick={this.onEdit}
                              dataTestId='Edit-button'
                              {...{ ButtonStyles }}
                           />
                        </Div3>
                     </SubCardDiv>
                  )
               })}
            </React.Fragment>
         )
      }
   })

   onEdit = () => {
      alert('next page')
   }

   render() {
      const {
         startDate,
         handleDateChange,
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
               <DatePicker
                  startDate={startDate}
                  handleDateChange={handleDateChange}
               />
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
