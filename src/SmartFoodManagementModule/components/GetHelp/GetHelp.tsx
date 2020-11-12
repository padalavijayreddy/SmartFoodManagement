import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import './index.css'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { FaHandsHelping } from 'react-icons/fa'
import { MdHelp } from 'react-icons/md'

interface State {
   highlightedHobby: boolean
}

@observer
class GetHelp extends Component<{}, State> {
   @observable display = true

   state = {
      highlightedHobby: false
   }

   toggle = () => {
      this.display = !this.display
   }

   listSwitch = () => {
      this.setState(state => ({
         highlightedHobby: !state.highlightedHobby
      }))
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
               onEntered={this.listSwitch}
               onExit={this.listSwitch}
            >
               <div className='menu-item'>
                  <ul className='list'>
                     <li
                        className={cx(
                           'list-item flex items-center justify-center border-bo',
                           {
                              'list-item--active': this.state.highlightedHobby
                           }
                        )}
                     >
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

export { GetHelp }
