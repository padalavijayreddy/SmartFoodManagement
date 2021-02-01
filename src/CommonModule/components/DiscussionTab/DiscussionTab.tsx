import React, { Component } from 'react'

class DiscussionTab extends Component {
   componentDidMount = () => {
      console.log('Discussion Tab component')
   }
   render() {
      return (
         <div>
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/coronavirus-img.png' />
         </div>
      )
   }
}

export { DiscussionTab }
