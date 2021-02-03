import React, { Component } from 'react'

class PollsTab extends Component {
   componentDidMount = () => {
      if (this.props.show == false) {
         this.props.toggleTab()
      }
      console.log('Polls Tab component')
   }
   render() {
      return (
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               width: '100vw',
               height: '50vh',
               backgroundColor: '#0d2436'
            }}
         >
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/goa-c2-img.png' />
         </div>
      )
   }
}

export { PollsTab }
