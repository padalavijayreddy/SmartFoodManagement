import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import SwipeableViews from 'react-swipeable-views'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const TabList1 = ['Notes', 'Discussions', 'CodePlayground', 'Polls']

const styles = {
   tabs: {
      background: '#fff'
   },
   slide: {
      padding: 15,
      minHeight: 200,
      color: '#fff'
   },
   slide1: {
      backgroundColor: '#FEA900'
   },
   slide2: {
      backgroundColor: '#B3DC4A'
   },
   slide3: {
      backgroundColor: '#6AC0FF'
   }
}

class DemoTabs2 extends React.Component {
   state = {
      index: 0
   }

   handleChange = (value: any) => {
      console.log(value)
      this.setState({
         index: value
      })
   }

   handleChangeIndex = (index: any) => {
      this.setState({
         index
      })
   }

   render() {
      const { index } = this.state

      return (
         <Tabs onSelect={index => this.handleChange(index)}>
            <TabList>
               <Tab>Title 1</Tab>
               <Tab>Title 2</Tab>
               <Tab>Title 3</Tab>
            </TabList>
            <SwipeableViews
               animateTransitions={true}
               index={index}
               onChangeIndex={this.handleChangeIndex}
            >
               <div style={Object.assign({}, styles.slide, styles.slide1)}>
                  Component 1
               </div>
               <div style={Object.assign({}, styles.slide, styles.slide2)}>
                  Component 2
               </div>
               <div style={Object.assign({}, styles.slide, styles.slide3)}>
                  Component 3
               </div>
            </SwipeableViews>
         </Tabs>
      )
   }
}

export { DemoTabs2 }
