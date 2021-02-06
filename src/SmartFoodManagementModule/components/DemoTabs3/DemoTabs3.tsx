import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './index.scss'

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
      backgroundColor: '#6AC0FF',
      transitionTimingFunction: 'ease-in-out'
   },
   slide4: {
      backgroundColor: '#d19ed9',
      transitionTimingFunction: 'ease-in-out'
   },
   swipe: {
      transition: 'width 2s'
   }
}

class DemoTabs3 extends Component {
   render() {
      return (
         <Tabs>
            <TabList>
               <Tab>Notes</Tab>
               <Tab>Discussions</Tab>
               <Tab>Code Playground</Tab>
               <Tab>Polls</Tab>
            </TabList>
            <div style={styles.swipe}>
               <TabPanel style={Object.assign({}, styles.slide, styles.slide1)}>
                  Component 1
               </TabPanel>
               <TabPanel style={Object.assign({}, styles.slide, styles.slide2)}>
                  Component 2
               </TabPanel>
               <TabPanel style={Object.assign({}, styles.slide, styles.slide3)}>
                  Component 3
               </TabPanel>
               <TabPanel style={Object.assign({}, styles.slide, styles.slide4)}>
                  Component 4
               </TabPanel>
            </div>
         </Tabs>
      )
   }
}

export { DemoTabs3 }
