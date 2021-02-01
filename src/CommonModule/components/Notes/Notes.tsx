import React, { Component } from 'react'

class Notes extends Component {
   componentDidMount = () => {
      console.log('Notes component')
   }

   render() {
      return (
         <div>
            <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/medicalcare-img.png' />
         </div>
      )
   }
}

export { Notes }
