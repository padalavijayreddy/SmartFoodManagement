import React, { Component } from 'react'
import Button from '../../../CommonModule/components/Button/Button'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { compareAsc } from 'date-fns'
import { formatDistance } from 'date-fns'

import {
   ButtonStyles,
   DisabledButtonStyles,
   MealTime,
   IAteButtonStyles,
   ISkippedButtonStyles
} from './styleComponents'

interface ButtonTimeProps {
   startTime: string
   endTime: string
   deadlineTime: string
   onChangeEditPageRoutes: () => void
}

@observer
class ButtonTimeLeft extends Component<ButtonTimeProps> {
   timer!: number
   @observable timeLeft: string = 'Time'
   @observable isWithInTime!: boolean
   @observable isTimeBetweenTheMealTimings!: boolean
   @observable isReviewButtonTime!: boolean

   componentDidMount() {
      this.renderTimeLeft()
   }

   renderTimeLeft = () => {
      const { deadlineTime, startTime, endTime } = this.props
      this.timer = setInterval(() => {
         if (compareAsc(new Date(deadlineTime), new Date()) === 1) {
            this.timeLeft = formatDistance(new Date(deadlineTime), new Date(), {
               includeSeconds: true
            })
            this.isWithInTime = true
         } else if (compareAsc(new Date(startTime), new Date()) === 1) {
            this.isWithInTime = false
            this.timeLeft = 'Edit closed'
         } else if (
            compareAsc(new Date(), new Date(startTime)) === 1 &&
            compareAsc(new Date(endTime), new Date()) === 1
         ) {
            this.timeLeft = 'I Ate it'
            this.isWithInTime = false
            this.isTimeBetweenTheMealTimings = true
         } else if (
            compareAsc(new Date(), new Date(startTime)) === 1 &&
            compareAsc(new Date(), new Date(endTime)) === 1
         ) {
            this.isReviewButtonTime = true
            this.isTimeBetweenTheMealTimings = false
         }
      })
   }

   reviewButton = () => {
      alert('hii')
   }

   render() {
      const {
         timeLeft,
         isWithInTime,
         isTimeBetweenTheMealTimings,
         isReviewButtonTime
      } = this
      const { onChangeEditPageRoutes } = this.props
      if (isWithInTime) {
         return (
            <Button
               text={`Edit ${timeLeft} left`}
               dataTestId='timeLeft-button'
               onClick={onChangeEditPageRoutes}
               {...{ ButtonStyles }}
            />
         )
      } else if (
         !isWithInTime &&
         !isReviewButtonTime &&
         !isTimeBetweenTheMealTimings
      ) {
         return (
            <Button
               text='Edit Closed'
               disabled='true'
               dataTestId='EditClosed-button'
               ButtonStyles={DisabledButtonStyles}
            />
         )
      } else if (isTimeBetweenTheMealTimings) {
         return (
            <MealTime>
               <Button
                  text='I Ate it'
                  dataTestId='IAteIt-button'
                  onClick={this.reviewButton}
                  ButtonStyles={IAteButtonStyles}
               />
               <Button
                  text='I Skipped'
                  dataTestId='ISkipped-button'
                  onClick={this.reviewButton}
                  ButtonStyles={ISkippedButtonStyles}
               />
            </MealTime>
         )
      } else if (isReviewButtonTime) {
         return (
            <Button
               text='Review'
               dataTestId='Review-button'
               onClick={this.reviewButton}
               {...{ ButtonStyles }}
            />
         )
      }
   }
}

export { ButtonTimeLeft }
