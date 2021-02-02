import React, { Component } from 'react'

class CodePlaygroundTab extends Component {
   componentDidMount = () => {
      console.log('CodePlayground component')
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
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/goa-c1-img.png' />
         </div>
      )
   }
}

export { CodePlaygroundTab }
