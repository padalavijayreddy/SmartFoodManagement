import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import './BannerAnimation.css'

const BgElement = Element.BgElement
class BannerAnimation extends React.Component {
   render() {
      return (
         <BannerAnim prefixCls='banner-user' autoPlay>
            <Element prefixCls='banner-user-elem' key='0'>
               <BgElement
                  key='bg'
                  className='bg'
                  style={{
                     backgroundImage: `url('/Images/Image-1.png')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
               <TweenOne
                  className='banner-user-title'
                  animation={{ y: 30, opacity: 0, type: 'from' }}
               >
                  Announcement
               </TweenOne>
               <TweenOne
                  className='banner-user-text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  Weekly Menu Changed...
               </TweenOne>
               <TweenOne
                  className='banner-user-highlight'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  Idly has been updated with poori on Monday due to requests
                  from South Indians
               </TweenOne>
            </Element>
            <Element prefixCls='banner-user-elem' key='1'>
               <BgElement
                  key='bg'
                  className='bg'
                  style={{
                     background: '#64CBCC',
                     backgroundImage: `url('/Images/Image-2.png')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     opacity: 1.0
                  }}
               />
               <TweenOne
                  className='banner-user-title'
                  animation={{ y: 30, opacity: 0, type: 'from' }}
               >
                  New Item Added
               </TweenOne>
               <TweenOne
                  className='banner-user-text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  Every Wednesday...
               </TweenOne>
               <TweenOne
                  className='banner-user-highlight'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  GulabJam is Added...
               </TweenOne>
            </Element>
            <Element prefixCls='banner-user-elem' key='2'>
               <BgElement
                  key='bg'
                  className='bg'
                  style={{
                     background: '#64CBCC',
                     backgroundImage: `url('/Images/Image-3.png')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
               <TweenOne
                  className='banner-user-title'
                  animation={{ y: 30, opacity: 0, type: 'from' }}
               >
                  Sunday's Special
               </TweenOne>
               <TweenOne
                  className='banner-user-text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  Biryani with Tomato Curry and Raitha ...
               </TweenOne>
            </Element>
            <Element prefixCls='banner-user-elem' key='3'>
               <BgElement
                  key='bg'
                  className='bg'
                  style={{
                     background: '#64CBCC',
                     backgroundImage: `url('/Images/Image-4.png')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
               <TweenOne
                  className='banner-user-title'
                  animation={{ y: 30, opacity: 0, type: 'from' }}
               >
                  Saturday Special Dinner
               </TweenOne>
               <TweenOne
                  className='banner-user-text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  Random Dishes,As You Like...
               </TweenOne>
            </Element>
            <Element prefixCls='banner-user-elem' key='4'>
               <BgElement
                  key='bg'
                  className='bg'
                  style={{
                     background: '#64CBCC',
                     backgroundImage: `url('/Images/Image-5.png')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}
               />
               <TweenOne
                  className='banner-user-title'
                  animation={{ y: 30, opacity: 0, type: 'from' }}
               >
                  Don't Waste the Food.
               </TweenOne>
               <TweenOne
                  className='banner-user-text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
               >
                  Wasting Food is Like Stealing from the Poor...
               </TweenOne>
            </Element>
         </BannerAnim>
      )
   }
}

export { BannerAnimation }
