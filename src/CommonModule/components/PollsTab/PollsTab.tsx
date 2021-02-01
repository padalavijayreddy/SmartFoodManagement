import React, { Component } from 'react'

class PollsTab extends Component {
   componentDidMount = () => {
      console.log('Polls Tab component')
   }
   render() {
      return (
         <div>
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/headache-img.png' />
         </div>
      )
   }
}

export { PollsTab }
