import React, { Component } from 'react'
import { CardDiv, IntialDiv, BreakFastDiv, SkipButton } from './styleComponents'

class Card extends Component {
   render() {
      return (
         <CardDiv>
            <IntialDiv>
               <BreakFastDiv>Breakfast</BreakFastDiv>
               <SkipButton>Skip Meal</SkipButton>
            </IntialDiv>
            <div className='flex w-full justify-start items-center'>
               <div>TabBar</div>
               <div>Date</div>
            </div>
            <div className='flex w-full justify-between items-center'>
               <div>List</div>
               <div>
                  <img src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/b69f1a68-b1d7-4eed-b1b0-f9a60a3e3595.png' />
               </div>
            </div>
            <div>
               <button>Back</button>
               <button>Save </button>
            </div>
         </CardDiv>
      )
   }
}

export { Card }
