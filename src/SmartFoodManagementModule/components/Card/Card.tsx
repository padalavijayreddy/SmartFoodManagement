import React, { Component } from 'react'
import {
   CardDiv,
   IntialDiv,
   BreakFastDiv,
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

interface CardProps {
   startDate: Date
   handleDateChange: (date: any) => void
}

class Card extends Component<CardProps> {
   skipMeal = () => {
      alert('Skipped Meal')
   }

   render() {
      const { startDate, handleDateChange } = this.props
      return (
         <CardDiv>
            <IntialDiv>
               <BreakFastDiv>Breakfast</BreakFastDiv>
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
                     onClick={this.skipMeal}
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
               <div>List</div>
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
      )
   }
}

export { Card }
