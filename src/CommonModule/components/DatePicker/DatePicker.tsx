import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickers, DatePickersDiv, Button } from './styleComponents'

interface DateProps {
   startDate: Date
   handleDateChange: (date: any) => void
   getPreviousDate: () => void
   getNextDate: () => void
}

@observer
class DatePicker extends React.Component<DateProps> {
   render() {
      return (
         <DatePickersDiv>
            <Button
               onClick={this.props.getPreviousDate}
               className='flex justify-center items-center p-5'
            >
               <img
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/1d88e7d7-8fc2-4024-8062-337a19c78a53.svg'
                  alt='ArrowLeft'
               ></img>
            </Button>
            <DatePickers>
               <ReactDatePicker
                  selected={this.props.startDate}
                  dateFormat='dd/MM/yyyy'
                  onChange={this.props.handleDateChange}
                  // isClearable
                  placeholderText='Cleared!'
                  className='flex w-full justify-center self-center text-lg focus:outline-none'
               />
            </DatePickers>
            <Button
               onClick={this.props.getNextDate}
               className='flex justify-center items-center p-5'
            >
               <img
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e2dde522-3de2-47a5-9915-b4f1102d4eed.svg'
                  alt='ArrowRight'
               ></img>
            </Button>
         </DatePickersDiv>
      )
   }
}

export { DatePicker }
