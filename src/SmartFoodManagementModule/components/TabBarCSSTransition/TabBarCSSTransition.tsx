import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { MdHelp } from 'react-icons/md'
import { FaHandsHelping } from 'react-icons/fa'
import cx from 'classnames'

observer
class TabBarCSSTransition extends Component {
   @observable display = true

   toggle = () => {
      this.display = !this.display
   }

   documentationWebsite = () => {}

   render() {
      return (
         <div className='container'>
            <CSSTransition
               in={this.display}
               timeout={400}
               classNames='display'
               unmountOnExit
               appear
            >
               <div className='menu-item'>
                  <ul className='list'>
                     <li>
                        Get Help &nbsp; <MdHelp />
                     </li>
                     <li
                        className='list-item'
                        onClick={this.documentationWebsite}
                     >
                        Documentation
                     </li>
                     <li className='list-item'>
                        Video about How to use this portal
                     </li>
                     <li className='list-item'>Upcoming Features</li>
                  </ul>
               </div>
            </CSSTransition>
            <button
               className={cx('toggler', {
                  'toggler--active': this.display
               })}
               title='Get Help'
               onClick={this.toggle}
            >
               <FaHandsHelping size={24} />
            </button>
         </div>
      )
   }
}

export { TabBarCSSTransition }
