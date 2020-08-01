import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickers } from './styleComponents'
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface DateProps {
   startDate: Date
   handleDateChange: (date: any) => void
}

@observer
class DatePicker extends React.Component<DateProps> {
   render() {
      return (
         <DatePickers>
            <ReactDatePicker
               selected={this.props.startDate}
               dateFormat='dd/MM/yyyy'
               onChange={this.props.handleDateChange}
               isClearable
               placeholderText='Cleared!'
               className='w-full self-center text-lg focus:outline-none'
            />
         </DatePickers>
      )
   }
}

export { DatePicker }
