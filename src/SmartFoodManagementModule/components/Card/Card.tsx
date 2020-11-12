import React, { Component } from 'react'
import {
   CardDiv,
   IntialDiv,
   MealTypeDiv,
   SkipButton,
   SecondDiv,
   TabBarDiv,
   MealStatusStyles,
   QuantityStatusStyles,
   DateDiv,
   ButtonsDiv,
   SaveButtonStyles,
   MealDiv,
   ButtonDiv,
   MainButtonDiv,
   ItemDiv,
   Categoryspan,
   CountStyles,
   Unitspan,
   Buttons,
   Buttons1,
   Buttons2,
   QuantityStyles,
   QuantityDiv,
   UnitsSpan,
   MainFullDiv,
   Buttons3,
   SelectPreference,
   FullDiv
} from './styleComponents'
import Button from '../../../CommonModule/components/Button/Button'
import { DatePicker } from '../../../CommonModule/components/DatePicker'
import EditPreferencesDataModel from '../../stores/models/EditPreferencesDataModel'
import LoadingWrapperWithFailure from '../../../CommonModule/common/LoadingWrapperWithFailure'
import NoDataView from '../../../CommonModule/common/NoDataView'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { FcServices } from 'react-icons/fc'

interface CardProps {
   doNetworkCalls: () => void
   getEditPreferencesAPIError: string
   getEditPreferencesAPIStatus: number
   editPreferencesList: EditPreferencesDataModel
   startDate: Date
   handleDateChange: (date: any) => void
   getPreviousDate: () => void
   getNextDate: () => void
   goBackHome: () => void
}

@observer
class Card extends Component<CardProps> {
   @observable activeMealType!: string
   @observable cursorPoint!: boolean

   componentDidMount() {
      if (this.props.editPreferencesList) {
         this.activeMealType = this.props.editPreferencesList.userMealPreferences
      }
   }

   skipMeal = () => {
      if (this.activeMealType == 'SKIP MEAL') {
         this.activeMealType = 'CUSTOM'
      } else {
         this.activeMealType = 'SKIP MEAL'
      }
   }

   fullMealPreferences = () => {
      this.activeMealType = 'FULL MEAL'
   }

   halfMealPreferences = () => {
      this.activeMealType = 'HALF MEAL'
   }

   customMealPreferences = () => {
      this.activeMealType = 'CUSTOM'
   }

   renderFoodItems = observer(() => {
      if (this.activeMealType == 'FULL MEAL') {
         return (
            <div>
               {this.props.editPreferencesList.fullMeal.map(EachItem => {
                  const quantity = EachItem.quantity
                  return (
                     <MainFullDiv>
                        <MealDiv>
                           <ItemDiv>{EachItem.itemName}</ItemDiv>
                           <Categoryspan className='text-sm'>
                              {EachItem.itemCateogary}
                           </Categoryspan>
                        </MealDiv>
                        <QuantityDiv>
                           <QuantityStyles>{EachItem.quantity}</QuantityStyles>
                           <UnitsSpan>{EachItem.servingBaseUnit}</UnitsSpan>
                        </QuantityDiv>
                     </MainFullDiv>
                  )
               })}
            </div>
         )
      } else if (this.activeMealType == 'CUSTOM') {
         return (
            <div className='w-1/2'>
               {this.props.editPreferencesList.customMeal.map(EachItem => {
                  const quantity = EachItem.quantity
                  return (
                     <MainButtonDiv>
                        <MealDiv>
                           <ItemDiv>{EachItem.itemName}</ItemDiv>
                           <Categoryspan className='text-sm'>
                              {EachItem.itemCateogary}
                           </Categoryspan>
                        </MealDiv>
                        <ButtonDiv>
                           <Button
                              text='-'
                              dataTestId='decreasing-button'
                              onClick={() =>
                                 (EachItem.quantity =
                                    EachItem.quantity == 0
                                       ? 0
                                       : EachItem.quantity - 1)
                              }
                              ButtonStyles={CountStyles}
                           />
                           <QuantityStatusStyles>
                              {EachItem.quantity}
                           </QuantityStatusStyles>
                           <Button
                              text='+'
                              dataTestId='adding-button'
                              onClick={() =>
                                 (EachItem.quantity =
                                    EachItem.quantity == 10
                                       ? 10
                                       : EachItem.quantity + 1)
                              }
                              ButtonStyles={CountStyles}
                           />
                        </ButtonDiv>
                        <Unitspan>{EachItem.servingBaseUnit}</Unitspan>
                     </MainButtonDiv>
                  )
               })}
            </div>
         )
      } else if (this.activeMealType == 'HALF MEAL') {
         return (
            <div>
               {this.props.editPreferencesList.halfMeal.map(EachItem => {
                  const quantity = EachItem.quantity
                  return (
                     <MainFullDiv>
                        <MealDiv>
                           <ItemDiv>{EachItem.itemName}</ItemDiv>
                           <Categoryspan className='text-sm'>
                              {EachItem.itemCateogary}
                           </Categoryspan>
                        </MealDiv>
                        <QuantityDiv>
                           <QuantityStyles>{EachItem.quantity}</QuantityStyles>
                           <UnitsSpan>{EachItem.servingBaseUnit}</UnitsSpan>
                        </QuantityDiv>
                     </MainFullDiv>
                  )
               })}
            </div>
         )
      } else if (this.activeMealType == 'SKIP MEAL') {
         return (
            <div>
               {this.props.editPreferencesList.skipped.map(EachItem => {
                  const quantity = EachItem.quantity
                  return (
                     <MainFullDiv>
                        <MealDiv>
                           <ItemDiv>{EachItem.itemName}</ItemDiv>
                           <Categoryspan className='text-sm'>
                              {EachItem.itemCateogary}
                           </Categoryspan>
                        </MealDiv>
                        <QuantityDiv>
                           <QuantityStyles>{EachItem.quantity}</QuantityStyles>
                           <UnitsSpan>{EachItem.servingBaseUnit}</UnitsSpan>
                        </QuantityDiv>
                     </MainFullDiv>
                  )
               })}
            </div>
         )
      } else {
         return (
            <FullDiv>
               <SelectPreference>
                  <FcServices />
                  &nbsp; SELECT YOUR MEAL PREFERENCES &nbsp;
                  <FcServices />
               </SelectPreference>
            </FullDiv>
         )
      }
   })

   renderEditEachMealPreferenceList = observer(() => {
      const {
         editPreferencesList,
         startDate,
         handleDateChange,
         getPreviousDate,
         getNextDate,
         getEditPreferencesAPIError,
         getEditPreferencesAPIStatus,
         doNetworkCalls
      } = this.props
      if (editPreferencesList == undefined) {
         return <NoDataView />
      } else {
         return (
            <React.Fragment>
               <CardDiv>
                  <IntialDiv>
                     <MealTypeDiv>{editPreferencesList.mealType}</MealTypeDiv>
                     <Buttons3
                        className={this.activeMealType}
                        onClick={this.skipMeal}
                     >
                        Skip Meal
                     </Buttons3>
                  </IntialDiv>
                  <SecondDiv>
                     <TabBarDiv>
                        <Buttons
                           className={this.activeMealType}
                           onClick={this.fullMealPreferences}
                        >
                           Full Meal
                        </Buttons>
                        <Buttons1
                           className={this.activeMealType}
                           onClick={this.halfMealPreferences}
                        >
                           Half Meal
                        </Buttons1>
                        <Buttons2
                           className={this.activeMealType}
                           onClick={this.customMealPreferences}
                        >
                           Custom
                        </Buttons2>
                     </TabBarDiv>
                     <DateDiv>
                        <DatePicker
                           getNextDate={getNextDate}
                           getPreviousDate={getPreviousDate}
                           startDate={startDate}
                           handleDateChange={handleDateChange}
                        />
                     </DateDiv>
                  </SecondDiv>
                  <div className='flex w-full justify-between items-center'>
                     <LoadingWrapperWithFailure
                        apiStatus={getEditPreferencesAPIStatus}
                        apiError={getEditPreferencesAPIError}
                        onRetryClick={doNetworkCalls}
                        renderSuccessUI={this.renderFoodItems}
                     />
                     <div>
                        <img src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/b69f1a68-b1d7-4eed-b1b0-f9a60a3e3595.png' />
                     </div>
                  </div>
                  <ButtonsDiv>
                     <Button
                        text='Back'
                        dataTestId='Back-button'
                        onClick={this.props.goBackHome}
                        ButtonStyles={SkipButton}
                     />
                     <Button
                        text='Save'
                        dataTestId='Save-button'
                        onClick={this.skipMeal}
                        ButtonStyles={SaveButtonStyles}
                     />
                  </ButtonsDiv>
               </CardDiv>
            </React.Fragment>
         )
      }
   })

   render() {
      const {
         getEditPreferencesAPIError,
         getEditPreferencesAPIStatus,
         doNetworkCalls
      } = this.props
      return (
         <LoadingWrapperWithFailure
            apiStatus={getEditPreferencesAPIStatus}
            apiError={getEditPreferencesAPIError}
            onRetryClick={doNetworkCalls}
            renderSuccessUI={this.renderEditEachMealPreferenceList}
         />
      )
   }
}

export { Card }
