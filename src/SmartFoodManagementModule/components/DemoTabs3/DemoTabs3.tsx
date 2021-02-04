import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './index.css'

class DemoTabs3 extends Component {
   render() {
      return (
         <Tabs className='l-tabs'>
            <TabList>
               <Tab>Notes</Tab>
               <Tab>Discussions</Tab>
            </TabList>
            <div
               style={{
                  display: 'flex',
                  transition:
                     'transform 1s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
                  willChange: 'transform',
                  transform: 'translate(0%)'
               }}
            >
               <TabPanel
                  style={{
                     width: '100%',
                     flexShrink: 0,
                     overflow: 'auto',
                     backgroundColor: '#FEA900',
                     minHeight: '200px'
                  }}
               >
                  Component 1
               </TabPanel>
               <TabPanel
                  style={{
                     width: '100%',
                     flexShrink: 0,
                     overflow: 'auto',
                     backgroundColor: '#B3DC4A',
                     minHeight: '200px'
                  }}
               >
                  Component 2
               </TabPanel>
            </div>
         </Tabs>
      )
   }
}

export { DemoTabs3 }
