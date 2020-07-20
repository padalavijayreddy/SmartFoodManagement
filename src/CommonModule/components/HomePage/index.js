import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '../../../AuthenticationModule/constants/NavigationConstants'
import './Home.css'

function App() {
   return (
      <div className='Home-navigation'>
         <div>
            <Link
               style={{ color: 'inherit', textDecoration: 'inherit' }}
               to={LOGIN_PATH}
            >
               Smart Food Management
            </Link>
         </div>
         <div>
            <Link
               style={{ color: 'inherit', textDecoration: 'inherit' }}
               to={LOGIN_PATH}
            >
               Content Management Portal
            </Link>
         </div>
      </div>
   )
}

export default App
