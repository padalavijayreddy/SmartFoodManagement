import React, { Component } from 'react'
import {
   CardDiv,
   IntialDiv,
   MealTypeDiv,
   SkipButton,
   SecondDiv,
   TabBarDiv,
   MealStatusStyles,
   DateDiv,
   ButtonsDiv,
   SaveButtonStyles
} from './styleComponents'
import Button from '../../../CommonModule/components/Button/Button'
import { DatePicker } from '../../../CommonModule/components/DatePicker'
import EditPreferencesDataModel from '../../stores/models/EditPreferencesDataModel'
import LoadingWrapperWithFailure from '../../../CommonModule/common/LoadingWrapperWithFailure'
import NoDataView from '../../../CommonModule/common/NoDataView'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

interface CardProps {
   doNetworkCalls: () => void
   getEditPreferencesAPIError: string
   getEditPreferencesAPIStatus: number
   editPreferencesList: EditPreferencesDataModel
   startDate: Date
   handleDateChange: (date: any) => void
}

@observer
class Card extends Component<CardProps> {
   @observable activeMealType!: string

   constructor(props) {
      super(props)
      this.activeMealType = this.props.editPreferencesList.userMealPreferences
   }

   skipMeal = () => {
      alert('Skipped Meal')
   }

   fullMealPreferences = () => {
      alert('fullMeal')
   }

   halfMealPreferences = () => {
      alert('Half Meal')
   }

   customMealPreferences = () => {
      alert('CustomMeal')
   }

   renderFoodItems = () => {
      if (this.activeMealType === 'FULL MEAL') {
      }
   }

   renderEditEachMealPreferenceList = observer(() => {
      const {
         editPreferencesList,
         startDate,
         handleDateChange,
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
                     <Button
                        text='Skip Meal'
                        dataTestId='SkipMeal-button'
                        onClick={this.skipMeal}
                        ButtonStyles={SkipButton}
                     />
                  </IntialDiv>
                  <SecondDiv>
                     <TabBarDiv>
                        <Button
                           text='Full Meal'
                           dataTestId='FullMeal-button'
                           onClick={this.fullMealPreferences}
                           ButtonStyles={MealStatusStyles}
                        />
                        <Button
                           text='Half Meal'
                           dataTestId='HalfMeal-button'
                           onClick={this.skipMeal}
                           ButtonStyles={MealStatusStyles}
                        />
                        <Button
                           text='Custom'
                           dataTestId='Custom-button'
                           onClick={this.skipMeal}
                           ButtonStyles={MealStatusStyles}
                        />
                     </TabBarDiv>
                     <DateDiv>
                        <DatePicker
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
                        onClick={this.skipMeal}
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
