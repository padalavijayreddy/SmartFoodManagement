import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { EachGlass } from './styledComponents'

interface GlassProps {
   glass: {
      id: number
      name: string
      filled: boolean
   }
   makeTrueOrFalse: (number) => void
}

@observer
class Glass extends Component<GlassProps> {
   @observable display: boolean = false

   toggle = () => {
      this.display = !this.display
      const Id = this.props.glass.id
      this.props.makeTrueOrFalse(Id)
   }

   render() {
      const { glass } = this.props
      const { id } = glass
      const { name } = glass
      const { filled } = glass
      const { display } = this
      return (
         <EachGlass status={filled} className='glass' onClick={this.toggle}>
            {name}
         </EachGlass>
      )
   }
}

export { Glass }
