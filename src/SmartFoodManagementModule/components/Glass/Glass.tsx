import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { EachGlass } from './styledComponents'
import { boolean } from '@storybook/addon-knobs'

interface GlassProps {
   glass: {
      id: number
      name: string
   }
}

@observer
class Glass extends Component<GlassProps> {
   @observable display: boolean = true

   toggle = () => {
      this.display = !this.display
   }

   render() {
      const { glass } = this.props
      const { name } = glass
      const { display } = this
      return (
         <EachGlass className='glass' onClick={this.toggle}>
            {name}
         </EachGlass>
      )
   }
}

export { Glass }
