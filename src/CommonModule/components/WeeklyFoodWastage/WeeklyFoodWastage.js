import React, { Component } from 'react'
import { MainDiv, SubDiv, OverViewDiv } from './styledComponents'
import { Tab, Statistic } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import BarChart from 'react-bar-chart'
import { BsArrowUp } from 'react-icons/bs'

import {
   BarStat,
   Statistics,
   Stats,
   FoodWasted,
   WastedKgs,
   Kgs,
   Content,
   CanServedPeople,
   People,
   Percentage,
   Percent,
   Analysis,
   Small
} from './styledComponents'

const TotalWeek = [
   { text: 'Monday', value: 500 },
   { text: 'Tuesday', value: 300 },
   { text: 'Wednesday', value: 200 },
   { text: 'Thursday', value: 700 },
   { text: 'Friday', value: 800 },
   { text: 'Saturday', value: 100 },
   { text: 'Sunday', value: 600 }
]

const TotalWeekBreakFast = [
   { text: 'Monday', value: 100 },
   { text: 'Tuesday', value: 200 },
   { text: 'Wednesday', value: 100 },
   { text: 'Thursday', value: 200 },
   { text: 'Friday', value: 100 },
   { text: 'Saturday', value: 200 },
   { text: 'Sunday', value: 600 }
]

const TotalWeekLunch = [
   { text: 'Monday', value: 500 },
   { text: 'Tuesday', value: 340 },
   { text: 'Wednesday', value: 240 },
   { text: 'Thursday', value: 400 },
   { text: 'Friday', value: 100 },
   { text: 'Saturday', value: 150 },
   { text: 'Sunday', value: 200 }
]

const TotalWeekDinner = [
   { text: 'Monday', value: 100 },
   { text: 'Tuesday', value: 10 },
   { text: 'Wednesday', value: 300 },
   { text: 'Thursday', value: 200 },
   { text: 'Friday', value: 400 },
   { text: 'Saturday', value: 400 },
   { text: 'Sunday', value: 105 }
]

const margin = { top: 20, right: 20, bottom: 30, left: 40 }

const panes = [
   {
      menuItem: 'All',
      render: () => (
         <Tab.Pane attached={false}>
            <BarStat>
               <BarChart
                  ylabel='Quantity'
                  width={600}
                  height={300}
                  margin={margin}
                  data={TotalWeek}
               />
               <Stats>
                  <FoodWasted>
                     <WastedKgs>
                        <Kgs>
                           16<Small>kgs</Small>
                        </Kgs>
                        <Content>food has wasted</Content>
                     </WastedKgs>
                     <CanServedPeople>
                        <Kgs>
                           67<Small>People</Small>
                        </Kgs>
                        <Content>can be served</Content>
                     </CanServedPeople>
                  </FoodWasted>
                  <Percentage>
                     <Percent>4.9%</Percent>
                     <BsArrowUp style={{ fontSize: 32, color: 'red' }} />
                     <Content>since last tuesday</Content>
                  </Percentage>
               </Stats>
            </BarStat>
         </Tab.Pane>
      )
   },
   {
      menuItem: 'BreakFast',
      render: () => (
         <Tab.Pane attached={false}>
            {' '}
            <BarChart
               ylabel='Quantity'
               width={600}
               height={300}
               margin={margin}
               data={TotalWeekBreakFast}
            />
         </Tab.Pane>
      )
   },
   {
      menuItem: 'Lunch',
      render: () => (
         <Tab.Pane loading={true} attached={false}>
            <BarChart
               ylabel='Quantity'
               width={600}
               height={300}
               margin={margin}
               data={TotalWeekLunch}
            />
         </Tab.Pane>
      )
   },
   {
      menuItem: 'Dinner',
      render: () => (
         <Tab.Pane attached={false}>
            <BarChart
               ylabel='Quantity'
               width={600}
               height={300}
               margin={margin}
               data={TotalWeekDinner}
            />
         </Tab.Pane>
      )
   }
]

const TabExamplePointing = () => (
   <Tab
      menu={{ style: { width: 305 }, pointing: true, color: 'blue' }}
      panes={panes}
   />
)

class WeeklyFoodWastage extends Component {
   render() {
      return (
         <MainDiv>
            <SubDiv>Weekly Food Wastage</SubDiv>
            <OverViewDiv>
               <TabExamplePointing />
            </OverViewDiv>
         </MainDiv>
      )
   }
}

export { WeeklyFoodWastage }
