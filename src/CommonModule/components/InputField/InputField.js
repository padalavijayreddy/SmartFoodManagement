import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Input } from './styledComponents'

@observer
export class InputField extends Component {
   static defaultProps = {
      type: 'text',
      ref: React.createRef()
   }

   render() {
      const {
         isErrorPresent,
         reference: ref,
         type,
         placeholder,
         value,
         onChange,
         ...otherProps
      } = this.props
      return (
         <Input
            {...{ isErrorPresent, ref, type, value, onChange, placeholder }}
         />
      )
   }
}
