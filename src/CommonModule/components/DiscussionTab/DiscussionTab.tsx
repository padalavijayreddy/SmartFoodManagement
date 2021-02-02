import React, { Component } from 'react'

class DiscussionTab extends Component {
   componentDidMount = () => {
      console.log('Discussion Tab component')
   }
   render() {
      return (
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               width: '100vw',
               height: '40vh',
               backgroundColor: '#0d2436'
            }}
         >
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/goa-c3-img.png' />
         </div>
      )
   }
}

export { DiscussionTab }
