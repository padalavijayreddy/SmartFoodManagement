import React, { Component } from 'react'
import getGlassesData from '../../fixtures/getGlassesData.json'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import './index.css'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { FaHandsHelping } from 'react-icons/fa'
import { MdHelp } from 'react-icons/md'
import { Glass } from '../Glass'

@observer
class WaterCount extends Component {
   @observable glasses = getGlassesData

   render() {
      return (
         <div className='water-count-application' id='waterCountApplication'>
            <div className='water-target'>
               <h3>Goal: 2 liters</h3>
               <div className='water-leveler'></div>
            </div>
            <div className='water-quantity'>
               <h3>Select how many glass of water you had?</h3>
               <div className='additional-features'></div>
               <div className='one-liter'>
                  {this.glasses.map(eachItem => (
                     <Glass key={eachItem.id} glass={eachItem} />
                  ))}
               </div>
            </div>
         </div>
      )
   }
}

export { WaterCount }
