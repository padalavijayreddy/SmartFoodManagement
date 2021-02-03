import React, { Component } from 'react'

class DiscussionTab extends Component {
   componentDidMount = () => {
      if (this.props.show == false) {
         this.props.toggleTab()
      }
      console.log('Discussion Tab component')
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
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/hotelbg.png' />
         </div>
      )
   }
}

export { DiscussionTab }
