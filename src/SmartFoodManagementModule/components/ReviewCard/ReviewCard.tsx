import React, { Component } from 'react'
import LoadingWrapperWithFailure from '../../../CommonModule/common/LoadingWrapperWithFailure'
import EditPreferencesDataModel from '../../stores/models/EditPreferencesDataModel'
import { observer } from 'mobx-react'
import NoDataView from '../../../CommonModule/common/NoDataView'
import {
   CardDiv,
   IntialDiv,
   QualityDiv,
   ReviewDiv,
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
   TasteDiv,
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
   FullDiv,
   ReviewFood,
   Input,
   InputDiv
} from './styledComponents'
import Button from '../../../CommonModule/components/Button/Button'
import ReactStars from 'react-rating-stars-component'
import { NONE } from 'apisauce'

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
class ReviewCard extends Component<CardProps> {
   saveMeal = () => {
      alert('Save')
   }

   ratingChanged = newRating => {
      console.log(newRating)
   }

   renderFoodItems = observer(() => {
      return (
         <ReviewFood>
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
                        <ReactStars
                           count={5}
                           onChange={this.ratingChanged}
                           size={24}
                           activeColor='#ffd700'
                           isHalf={true}
                           a11y={true}
                           value={3.5}
                        />
                     </QuantityDiv>
                     <QuantityDiv>
                        <ReactStars
                           count={5}
                           onChange={this.ratingChanged}
                           size={24}
                           activeColor='#ffd700'
                           isHalf={true}
                           a11y={true}
                           value={3.0}
                        />
                     </QuantityDiv>
                     <QuantityDiv></QuantityDiv>
                  </MainFullDiv>
               )
            })}
         </ReviewFood>
      )
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
                     <ReviewDiv>Review</ReviewDiv>
                  </IntialDiv>
                  <SecondDiv>
                     <QualityDiv></QualityDiv>
                     <QualityDiv>Quality</QualityDiv>
                     <TasteDiv>Taste</TasteDiv>
                     <QualityDiv></QualityDiv>
                  </SecondDiv>
                  <div className='flex w-full justify-between items-center'>
                     <LoadingWrapperWithFailure
                        apiStatus={getEditPreferencesAPIStatus}
                        apiError={getEditPreferencesAPIError}
                        onRetryClick={doNetworkCalls}
                        renderSuccessUI={this.renderFoodItems}
                     />
                  </div>
                  <ReviewFood>
                     <InputDiv>
                        <Input placeholder='Write Review' />
                     </InputDiv>
                  </ReviewFood>
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
                        onClick={this.saveMeal}
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

export { ReviewCard }
