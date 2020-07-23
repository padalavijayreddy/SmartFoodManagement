import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickers } from './styleComponents'
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

@observer
class DatePicker extends React.Component {
   @observable startDate = new Date()

   handleChange = date => {
      this.startDate = date
   }

   render() {
      return (
         <DatePickers>
            <ReactDatePicker
               selected={this.startDate}
               dateFormat='dd/MM/yyyy'
               onChange={this.handleChange}
               isClearable
               placeholderText='I have been cleared!'
               className='focus:outline-none'
            />
         </DatePickers>
      )
   }
}

export { DatePicker }
