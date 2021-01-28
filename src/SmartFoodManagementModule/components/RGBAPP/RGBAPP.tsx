import React, { Component } from 'react'
import {
   MainDiv,
   LeftDiv,
   RightDiv,
   TopSideDiv,
   CenterSideDiv,
   BottomSideDiv,
   ColorDiv,
   EachDiv,
   Arrows,
   Arrow,
   Arrows1
} from './styledComponents'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class RGBAPP extends Component {
   @observable leftSideColor: string = 'BLUE'
   @observable rightSideTopColor: string = 'RED'
   @observable rightSideCenterColor: string = 'BLUE'
   @observable rightSideBottomColor: string = 'GREEN'
   @observable leftSideDirectionDisplay: string = 'row'
   @observable leftSideDirectionHeight: number = 100

   changeToRed = (variable: string) => {
      if (variable == 'LEFT') this.leftSideColor = 'RED'
      if (variable == 'TOP') this.rightSideTopColor = 'RED'
      if (variable == 'CENTER') this.rightSideCenterColor = 'RED'
      if (variable == 'BOTTOM') this.rightSideBottomColor = 'RED'
   }

   changeToBlue = (variable: string) => {
      if (variable == 'LEFT') this.leftSideColor = 'BLUE'
      if (variable == 'TOP') this.rightSideTopColor = 'BLUE'
      if (variable == 'CENTER') this.rightSideCenterColor = 'BLUE'
      if (variable == 'BOTTOM') this.rightSideBottomColor = 'BLUE'
   }

   changeToGreen = (variable: string) => {
      if (variable == 'LEFT') this.leftSideColor = 'GREEN'
      if (variable == 'TOP') this.rightSideTopColor = 'GREEN'
      if (variable == 'CENTER') this.rightSideCenterColor = 'GREEN'
      if (variable == 'BOTTOM') this.rightSideBottomColor = 'GREEN'
   }

   changeLeftSideDirection = (variable: string) => {
      if (variable == 'LEFTSIDE') this.leftSideDirectionDisplay = 'row'
      if (variable == 'RIGHTSIDE') this.leftSideDirectionDisplay = 'row-reverse'
   }

   changeLeftSideDirectionsHeight = (variable: string) => {
      if (variable == 'TOP') {
         if (this.leftSideDirectionHeight == 20) {
            alert('Minimum size is exceed')
         } else {
            this.leftSideDirectionHeight = this.leftSideDirectionHeight - 20
         }
      }
      if (variable == 'DOWN') {
         if (this.leftSideDirectionHeight == 100) {
            alert('Maximum size is exceed')
         } else {
            this.leftSideDirectionHeight = this.leftSideDirectionHeight + 20
         }
      }
   }

   changeRightSideColors = (variable1: string, variable2: string) => {
      if (variable1 == 'TOP' && variable2 == 'UP') {
         const color = this.rightSideTopColor
         this.rightSideTopColor = this.rightSideBottomColor
         this.rightSideBottomColor = color
      } else if (variable1 == 'TOP' && variable2 == 'DOWN') {
         const color = this.rightSideTopColor
         this.rightSideTopColor = this.rightSideCenterColor
         this.rightSideCenterColor = color
      } else if (variable1 == 'CENTER' && variable2 == 'UP') {
         const color = this.rightSideCenterColor
         this.rightSideCenterColor = this.rightSideTopColor
         this.rightSideTopColor = color
      } else if (variable1 == 'CENTER' && variable2 == 'DOWN') {
         const color = this.rightSideCenterColor
         this.rightSideCenterColor = this.rightSideBottomColor
         this.rightSideBottomColor = color
      } else if (variable1 == 'BOTTOM' && variable2 == 'UP') {
         const color = this.rightSideBottomColor
         this.rightSideBottomColor = this.rightSideCenterColor
         this.rightSideCenterColor = color
      } else if (variable1 == 'BOTTOM' && variable2 == 'DOWN') {
         const color = this.rightSideBottomColor
         this.rightSideBottomColor = this.rightSideTopColor
         this.rightSideTopColor = color
      }
   }

   render() {
      return (
         <MainDiv direction={this.leftSideDirectionDisplay}>
            <LeftDiv
               height={this.leftSideDirectionHeight}
               state={this.leftSideColor}
            >
               <ColorDiv>
                  <EachDiv onClick={() => this.changeToRed('LEFT')}>
                     RED
                  </EachDiv>
                  <EachDiv onClick={() => this.changeToBlue('LEFT')}>
                     BLUE
                  </EachDiv>
                  <EachDiv onClick={() => this.changeToGreen('LEFT')}>
                     GREEN
                  </EachDiv>
               </ColorDiv>
               <Arrows>
                  <Arrow
                     onClick={() => this.changeLeftSideDirection('LEFTSIDE')}
                     className='arrow fa fa-arrow-circle-left'
                  ></Arrow>
                  <Arrow
                     onClick={() => this.changeLeftSideDirection('RIGHTSIDE')}
                     className='arrow fa fa-arrow-circle-right'
                  ></Arrow>
                  <Arrow
                     onClick={() => this.changeLeftSideDirectionsHeight('TOP')}
                     className='arrow fa fa-arrow-circle-up'
                  ></Arrow>
                  <Arrow
                     onClick={() => this.changeLeftSideDirectionsHeight('DOWN')}
                     className='arrow fa fa-arrow-circle-down'
                  ></Arrow>
               </Arrows>
            </LeftDiv>
            <RightDiv>
               <TopSideDiv state={this.rightSideTopColor}>
                  <ColorDiv>
                     <EachDiv onClick={() => this.changeToRed('TOP')}>
                        RED
                     </EachDiv>
                     <EachDiv onClick={() => this.changeToBlue('TOP')}>
                        BLUE
                     </EachDiv>
                     <EachDiv onClick={() => this.changeToGreen('TOP')}>
                        GREEN
                     </EachDiv>
                  </ColorDiv>
                  <Arrows1>
                     <Arrow
                        onClick={() => this.changeRightSideColors('TOP', 'UP')}
                        className='arrow fa fa-arrow-circle-up'
                     ></Arrow>
                     <Arrow
                        onClick={() =>
                           this.changeRightSideColors('TOP', 'DOWN')
                        }
                        className='arrow fa fa-arrow-circle-down'
                     ></Arrow>
                  </Arrows1>
               </TopSideDiv>
               <CenterSideDiv state={this.rightSideCenterColor}>
                  <ColorDiv>
                     <EachDiv onClick={() => this.changeToRed('CENTER')}>
                        RED
                     </EachDiv>
                     <EachDiv onClick={() => this.changeToBlue('CENTER')}>
                        BLUE
                     </EachDiv>
                     <EachDiv onClick={() => this.changeToGreen('CENTER')}>
                        GREEN
                     </EachDiv>
                  </ColorDiv>
                  <Arrows1>
                     <Arrow
                        onClick={() =>
                           this.changeRightSideColors('CENTER', 'UP')
                        }
                        className='arrow fa fa-arrow-circle-up'
                     ></Arrow>
                     <Arrow
                        onClick={() =>
                           this.changeRightSideColors('CENTER', 'DOWN')
                        }
                        className='arrow fa fa-arrow-circle-down'
                     ></Arrow>
                  </Arrows1>
               </CenterSideDiv>
               <BottomSideDiv state={this.rightSideBottomColor}>
                  <ColorDiv>
                     <EachDiv onClick={() => this.changeToRed('BOTTOM')}>
                        RED
                     </EachDiv>
                     <EachDiv onClick={() => this.changeToBlue('BOTTOM')}>
                        BLUE
                     </EachDiv>
                     <EachDiv onClick={() => this.changeToGreen('BOTTOM')}>
                        GREEN
                     </EachDiv>
                  </ColorDiv>
                  <Arrows1>
                     <Arrow
                        onClick={() =>
                           this.changeRightSideColors('BOTTOM', 'UP')
                        }
                        className='arrow fa fa-arrow-circle-up'
                     ></Arrow>
                     <Arrow
                        onClick={() =>
                           this.changeRightSideColors('BOTTOM', 'DOWN')
                        }
                        className='arrow fa fa-arrow-circle-down'
                     ></Arrow>
                  </Arrows1>
               </BottomSideDiv>
            </RightDiv>
         </MainDiv>
      )
   }
}

export { RGBAPP }
