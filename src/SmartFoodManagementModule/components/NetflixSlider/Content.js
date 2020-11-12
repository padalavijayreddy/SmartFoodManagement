import React, { Component } from 'react'
import IconCross from './../Icons/IconCross'
import './Content.scss'

class Content extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      const { image, onClose } = this.props
      return (
         <div className='content'>
            <div className='content__background'>
               <div className='content__background__shadow' />
               <div
                  className='content__background__image'
                  style={{
                     'background-image': `url(${image.imageBg})`,
                     transition: 'background-image 700ms'
                  }}
               />
            </div>
            <div className='content__area'>
               <div className='content__area__container'>
                  <div className='content__title'>{image.title}</div>
                  <div className='content__description'>
                     {image.imageMatter}
                     <button className='content_open'>
                        Open {image.title}
                     </button>
                     <i>
                        <b>NOTE : &nbsp;</b>
                        {image.noteMatter}
                     </i>
                     <div className='flex justify-space-around'>
                        <button
                           className='content_close_button'
                           onClick={onClose}
                        >
                           Close
                        </button>
                        <button
                           className='content_next_button'
                           onClick={onClose}
                        >
                           Open Portal
                        </button>
                     </div>
                  </div>
               </div>
               <button className='content_close' onClick={onClose}>
                  <IconCross />
               </button>
            </div>
         </div>
      )
   }
}

export default Content
