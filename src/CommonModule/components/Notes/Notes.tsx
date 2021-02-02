import React, { Component } from 'react'

class Notes extends Component {
   componentDidMount = () => {
      console.log('Notes component')
   }

   render() {
      return (
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               backgroundColor: '#0d2436'
            }}
         >
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/arvrbg.png' />
         </div>
      )
   }
}

export { Notes }
