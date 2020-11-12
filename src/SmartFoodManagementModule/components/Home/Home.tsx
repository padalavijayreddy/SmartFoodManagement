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
import { ButtonTimeLeft } from '../ButtonTimeLeft'
import { format } from 'date-fns'
import { GetHelp } from '../GetHelp'

const MealTypeList = [
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/2a3afcdb-6b81-44d8-beba-9992afd72ed4.svg',
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/eb488d1e-9626-4181-8208-5506c4e5a60a.svg',
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/b9788c8e-9f46-4016-9c46-5d60fe9e9106.svg'
]

interface HomeProps {
   mealType: string
   onChangeMealType: (value: string) => void
   startDate: Date
   handleDateChange: (date: any) => void
   getPreviousDate: () => void
   getNextDate: () => void
   bannerDataList: Array<BannerDataModel>
   getBannerDataAPIStatus: string
   getBannerDataAPIError: string
   doNetworkCalls: () => void
   menuItemsList: Array<MenuItemsModel>
   getMenuItemsAPIStatus: string
   getMenuItemsAPIError: string
   onChangeEditPageRoutes: (status: string) => void
   onChangeReviewPageRoutes: () => void
   toggleDisplayCartFalse: () => void
}

class Home extends Component<HomeProps> {
   renderMenuItemList = observer(() => {
      const {
         menuItemsList,
         onChangeEditPageRoutes,
         onChangeReviewPageRoutes,
         mealType,
         getPreviousDate,
         getNextDate,
         onChangeMealType
      } = this.props
      if (menuItemsList.length === 0) {
         return <NoDataView />
      } else {
         return (
            <React.Fragment>
               {menuItemsList.map((eachMeal, index) => {
                  const StartTime = format(
                     new Date(eachMeal.startTime),
                     'hh:mm'
                  )
                  const EndTime = format(new Date(eachMeal.endTime), 'hh:mm')
                  return (
                     <SubCardDiv>
                        <Div1>
                           <Div1Side1>
                              <Div1Image src={MealTypeList[index]} />
                              <Div1TypeTime>
                                 <Div1Type>{eachMeal.mealType}</Div1Type>
                                 <Div1Time>
                                    {StartTime} &nbsp; <span> - </span>
                                    &nbsp;<span>{EndTime}</span>
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
                           <ButtonTimeLeft
                              mealStatus={eachMeal.mealStatus}
                              onChangeMealType={onChangeMealType}
                              mealType={eachMeal.mealType}
                              startTime={eachMeal.startTime}
                              endTime={eachMeal.endTime}
                              deadlineTime={eachMeal.deadLine}
                              onChangeEditPageRoutes={onChangeEditPageRoutes}
                              onChangeReviewPageRoutes={
                                 onChangeReviewPageRoutes
                              }
                              mealID={eachMeal.mealId}
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
         getPreviousDate,
         getNextDate,
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls,
         menuItemsList,
         getMenuItemsAPIStatus,
         getMenuItemsAPIError,
         toggleDisplayCartFalse
      } = this.props

      return (
         <HomeMainDiv onClick={toggleDisplayCartFalse}>
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
                  getNextDate={getNextDate}
                  getPreviousDate={getPreviousDate}
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
            <GetHelp />
         </HomeMainDiv>
      )
   }
}

export { Home }
