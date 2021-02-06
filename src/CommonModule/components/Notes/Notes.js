import React, { Component } from 'react'

class Notes extends Component {
   componentDidMount = () => {
      if (this.props.show == false) {
         this.props.toggleTab()
      }
      console.log('Notes component')
   }

   render() {
      return (
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               backgroundColor: '#0d2436',
               width: '100vw',
               height: '50vh'
            }}
         >
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/goa-c3-img.png' />
         </div>
      )
   }
}

export { Notes }
