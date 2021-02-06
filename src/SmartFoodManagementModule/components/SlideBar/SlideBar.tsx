import React, { Component } from 'react'
import { SlidebarDiv, SlideBarSubDiv } from './styleComponents'
import { FaChevronLeft, FaLongArrowAltLeft } from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './index.scss'

interface SlidebarProps {
   toggleDisplaySideBar: () => void
   shouldDisplaySideBar: boolean
   statusBar: string
   changeStatusBar: (status: string) => void
}

class SlideBar extends Component<SlidebarProps> {
   hideSlideBar = () => {
      const { toggleDisplaySideBar } = this.props
      toggleDisplaySideBar()
   }

   changeStatusBar = (index: number) => {
      const { changeStatusBar } = this.props
      {
         index == 0
            ? changeStatusBar('MY_PROFILE')
            : index == 1
            ? changeStatusBar('TOURNAMENTS')
            : changeStatusBar('LEADER_BOARD_POSITIONS')
      }
   }

   render() {
      const { toggleDisplaySideBar, shouldDisplaySideBar } = this.props
      return (
         <SlidebarDiv {...{ shouldDisplaySideBar }}>
            <Tabs
               onSelect={index => this.changeStatusBar(index)}
               className='w-full'
            >
               <TabList className='flex main_tab flex-col'>
                  <Tab className='p-5 child_tab hover:text-black m-1'>
                     My Profile
                  </Tab>
                  <Tab className='p-5 child_tab hover:text-black m-1'>
                     Tournaments
                  </Tab>
                  <Tab className='p-5 child_tab hover:text-black m-1'>
                     Leader Board Positions
                  </Tab>
               </TabList>
            </Tabs>
         </SlidebarDiv>
      )
   }
}

export { SlideBar }
