import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Tab, Tabs, TabList } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Notes } from '../../../CommonModule/components/Notes'
import { DiscussionTab } from '../../../CommonModule/components/DiscussionTab'
import { CodePlaygroundTab } from '../../../CommonModule/components/CodePlaygroundTab'
import { PollsTab } from '../../../CommonModule/components/PollsTab'

const TabList1 = ['Notes', 'Discussions', 'CodePlayground', 'Polls']

const styles = {
   tabs: {
      transition: 'transform 1s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
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
   },
   slide4: {
      backgroundColor: '#d19ed9'
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
               <Tab>Notes</Tab>
               <Tab>Discussions</Tab>
               <Tab>Code Playground</Tab>
               <Tab>Polls</Tab>
            </TabList>
            <SwipeableViews
               style={styles.tabs}
               index={index}
               onChangeIndex={this.handleChangeIndex}
            >
               <div style={Object.assign({}, styles.slide, styles.slide1)}>
                  <Notes />
               </div>
               <div style={Object.assign({}, styles.slide, styles.slide2)}>
                  <DiscussionTab />
               </div>
               <div style={Object.assign({}, styles.slide, styles.slide3)}>
                  <CodePlaygroundTab />
               </div>
               <div style={Object.assign({}, styles.slide, styles.slide4)}>
                  <PollsTab />
               </div>
            </SwipeableViews>
         </Tabs>
      )
   }
}

export { DemoTabs2 }
