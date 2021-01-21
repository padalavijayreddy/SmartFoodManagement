import React, { Component } from 'react'
import getGlassesData from '../../fixtures/getGlassesData.json'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import './index.css'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { FaHandsHelping } from 'react-icons/fa'
import { MdHelp } from 'react-icons/md'
import { Glass } from '../Glass'
import { EachItem } from '../Home/styledComponents'

@observer
class WaterCount extends Component {
   @observable glasses = getGlassesData

   @action.bound
   makeTrueOrFalse(selectedIndex: number) {
      const isFilledAlready = this.glasses[selectedIndex].filled
      this.glasses.forEach((eachGlass, index) => {
         if (index < selectedIndex) {
            eachGlass.filled = true
         } else if (index > selectedIndex) {
            eachGlass.filled = false
         } else {
            const selectedIndexIsFilled = eachGlass.filled,
               nextIndexIsFilled =
                  this.glasses[selectedIndex + 1]?.filled ?? false
            eachGlass.filled = !(!nextIndexIsFilled && selectedIndexIsFilled)
         }
      })

      // if (this.glasses[id - 1].filled == true && id != this.glasses.length) {
      //    if (this.glasses[id].filled == true) {
      //       this.glasses.forEach((eachGlass, index) => {
      //          if (eachGlass.id > id) {
      //             this.glasses[index].filled = false
      //          }
      //       })
      //    } else {
      //       this.glasses.forEach((eachGlass, index) => {
      //          if (eachGlass.id == id) {
      //             this.glasses[index].filled = false
      //          }
      //       })
      //    }
      // }
   }

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
                     <Glass
                        key={eachItem.id}
                        makeTrueOrFalse={this.makeTrueOrFalse}
                        glass={eachItem}
                     />
                  ))}
               </div>
            </div>
         </div>
      )
   }
}

export { WaterCount }
