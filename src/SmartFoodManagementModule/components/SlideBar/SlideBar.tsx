import React, { Component } from 'react'
import { SlidebarDiv, SlideBarSubDiv } from './styleComponents'
import { FaChevronLeft, FaLongArrowAltLeft } from 'react-icons/fa'

interface SlidebarProps {
   toggleDisplaySideBar: () => void
   shouldDisplaySideBar: boolean
}

class SlideBar extends Component<SlidebarProps> {
   hideSlideBar = () => {
      const { toggleDisplaySideBar } = this.props
      toggleDisplaySideBar()
   }

   render() {
      const { toggleDisplaySideBar, shouldDisplaySideBar } = this.props
      return (
         <SlidebarDiv {...{ shouldDisplaySideBar }}>
            {/* <SlideBarSubDiv> */}
            <FaChevronLeft />
            Contents
            <FaLongArrowAltLeft />
            {/* </SlideBarSubDiv> */}
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
            <div>
               contents will deilvered
               <br />
               as soon as possible
            </div>
         </SlidebarDiv>
      )
   }
}

export { SlideBar }
