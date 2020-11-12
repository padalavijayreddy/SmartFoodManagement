import React from 'react'
import Moment from 'react-moment'
import { observable } from 'mobx'

class ReactCountDown extends React.Component {
   render() {
      return (
         <Moment className='text-white' format='YYYY/MM/DD'>
            1976-04-19T12:59-0500
         </Moment>
      )
   }
}

export { ReactCountDown }
