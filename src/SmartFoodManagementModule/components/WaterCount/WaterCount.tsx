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

import { EmptySpace, FilledSpace, PTag } from './styledComponents'
import { EachGlass } from '../Glass/styledComponents'
import { type } from 'os'

@observer
class WaterCount extends Component {
   @observable glasses = getGlassesData
   @observable remainingHeight!: number
   @observable emptyHeight: number = 0
   @observable filledHeight: number = 0

   @action.bound
   makeTrueOrFalse(selectedIndex: number) {
      this.glasses.forEach((EachGlass, index) => {
         if (index < selectedIndex) {
            EachGlass.filled = true
         } else if (index > selectedIndex) {
            EachGlass.filled = false
         } else {
            const isSelectedIndexFilled = this.glasses[selectedIndex].filled
            const nextToSelectedIndex =
               this.glasses[selectedIndex + 1]?.filled ?? false
            EachGlass.filled = !(isSelectedIndexFilled && !nextToSelectedIndex)
         }
      })
      this.findHeightOfWaterLevel()
   }

   @action.bound
   findHeightOfWaterLevel() {
      this.filledHeight = 0
      this.remainingHeight = 0
      let count = 0
      this.glasses.forEach((EachGlass, index) => {
         if (EachGlass.filled == true) {
            this.filledHeight += 12.5
            count = count += 0.25
         } else {
            this.emptyHeight += 12.5
         }
         this.emptyHeight = this.emptyHeight / 2
         this.remainingHeight = 2 - count
      })
   }

   render() {
      return (
         <div className='water-count-application' id='waterCountApplication'>
            <div className='water-target'>
               <h3>Goal: 2 liters</h3>
               <div className='water-leveler'>
                  <PTag>
                     {!this.filledHeight || this.remainingHeight == 2
                        ? '2L Remaining'
                        : ''}
                  </PTag>
                  <FilledSpace
                     filledHeight={this.filledHeight}
                     className='filled-space'
                  >
                     {this.filledHeight ? `${this.filledHeight} %` : ''}
                  </FilledSpace>
                  <EmptySpace
                     emptyHeight={this.emptyHeight}
                     className='empty-space'
                  >
                     {this.emptyHeight &&
                     this.remainingHeight != 0 &&
                     this.remainingHeight != 2
                        ? `${this.remainingHeight} remaining`
                        : ''}
                  </EmptySpace>
               </div>
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
