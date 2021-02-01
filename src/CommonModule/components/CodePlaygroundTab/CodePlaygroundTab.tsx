import React, { Component } from 'react'

class CodePlaygroundTab extends Component {
   componentDidMount = () => {
      console.log('CodePlayground component')
   }
   render() {
      return (
         <div>
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/doctor-img.png' />
         </div>
      )
   }
}

export { CodePlaygroundTab }
