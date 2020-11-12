import React from 'react'
import cx from 'classnames'
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'

const Item = ({ image }) => (
   <SliderContext.Consumer>
      {({ onSelectSlide, currentSlide, elementRef }) => {
         const isActive = currentSlide && currentSlide.id === image.id

         return (
            <div
               ref={elementRef}
               className={cx('item', {
                  'item--open': isActive
               })}
            >
               <img
                  onClick={() => onSelectSlide(image)}
                  src={image.image}
                  alt=''
               />
               <p onClick={() => onSelectSlide(image)}>{image.title}</p>
               {/* <ShowDetailsButton onClick={() => onSelectSlide(image)} /> */}
               {isActive && <Mark />}
            </div>
         )
      }}
   </SliderContext.Consumer>
)

export default Item
