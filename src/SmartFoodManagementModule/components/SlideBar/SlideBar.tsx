import React, { Component } from 'react'
import { SlidebarDiv } from './styleComponents'

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
            Hello this is Slide Bar Open
         </SlidebarDiv>
      )
   }
}

export { SlideBar }
