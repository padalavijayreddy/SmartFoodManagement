import React, { Component } from 'react'
import { MainDiv, SubDiv, OverViewDiv } from './styledComponents'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import BarChart from 'react-bar-chart'

const data = [
   { text: 'Man', value: 500 },
   { text: 'Woman', value: 300 }
]

const state = {
   labels: ['January', 'February', 'March', 'April', 'May'],
   datasets: [
      {
         label: 'Rainfall',
         backgroundColor: 'rgba(75,192,192,1)',
         borderColor: 'rgba(0,0,0,1)',
         borderWidth: 2,
         data: [65, 59, 80, 81, 56]
      }
   ]
}

const panes = [
   {
      menuItem: 'All',
      render: () => <Tab.Pane attached={false}>All</Tab.Pane>
   },
   {
      menuItem: 'BreakFast',
      render: () => <Tab.Pane attached={false}>BreakFast</Tab.Pane>
   },
   {
      menuItem: 'Lunch',
      render: () => <Tab.Pane attached={false}>Lunch</Tab.Pane>
   },
   {
      menuItem: 'Dinner',
      render: () => <Tab.Pane attached={false}>Dinner</Tab.Pane>
   }
]

const TabExamplePointing = () => (
   <Tab onClick={() => alert('hi')} menu={{ pointing: true }} panes={panes} />
)

const margin = { top: 20, right: 20, bottom: 30, left: 40 }

class WeeklyFoodWastage extends Component {
   render() {
      return (
         <MainDiv>
            <SubDiv>Weekly Food Wastage</SubDiv>
            <OverViewDiv>
               <TabExamplePointing />
               <div style={{ width: '50%' }}>
                  <BarChart
                     ylabel='Quantity'
                     width={500}
                     height={500}
                     margin={margin}
                     data={data}
                     onBarClick={this.handleBarClick}
                  />
               </div>
            </OverViewDiv>
         </MainDiv>
      )
   }
}

export { WeeklyFoodWastage }
