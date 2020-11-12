import React, { Component } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import './Notification.css'
import uuid from 'uuid'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { AiFillStar } from 'react-icons/ai'
import { FcRating } from 'react-icons/fc'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

@observer
class Notification extends Component {
   state = {
      favComics: []
   }

   toggleInFavComics = id => {
      let favComics
      const isItemFavorite = this.state.favComics.find(
         favorite => favorite.id === id
      )
      if (isItemFavorite) {
         favComics = this.state.favComics.filter(favorite => favorite.id !== id)
      } else {
         favComics = [
            ...this.state.favComics,
            this.heroes.find(item => id === item.id)
         ]
      }
      this.setState({ favComics })
   }

   heroes = [
      {
         name: 'Our New Leader elected for Food Department : Vijay',
         id: uuid()
      },
      {
         name:
            'Today is the Biggest Day, More than 1000 people are going to take free food parcels from today, Thanks for all your support',
         id: uuid()
      },
      {
         name:
            'New Leader Elections are going to happen soon, Keep checking this space for upcoming election Notification',
         id: uuid()
      },
      {
         name: 'ELECTIONS DATE : DEC 1st 2020',
         id: uuid()
      },
      {
         name: 'ELECTION RESULTS DATE : DEC 5th 2020',
         id: uuid()
      }
   ]

   render() {
      const { toggleModal, shouldDisplayModal } = this.props
      return (
         <div class='container'>
            <Modal
               open={shouldDisplayModal}
               onClose={toggleModal}
               contentLabel='My dialog'
               className='mymodal'
               closeTimeoutMS={500}
               showCloseIcon={false}
            >
               <div className='flex'>
                  <ul className='comics'>
                     <p className='heading'>Notifications:</p>
                     {this.heroes.map(({ id, name }) => (
                        <li
                           key={id}
                           className='comic'
                           onClick={() => this.toggleInFavComics(id)}
                        >
                           <span className='star'>
                              {this.state.favComics.find(
                                 favorite => favorite.id === id
                              )
                                 ? '⭐'
                                 : '☆'}
                           </span>{' '}
                           &nbsp;
                           {name}
                        </li>
                     ))}
                  </ul>
                  <div className='favorites'>
                     <p className='heading2'>Make Favorite Notifications:</p>
                     <TransitionGroup component='null'>
                        {this.state.favComics.map(({ id, name }) => (
                           <CSSTransition
                              timeout={350}
                              classNames='favorite'
                              key={id}
                           >
                              <li className='favorite'>&nbsp;{name}</li>
                           </CSSTransition>
                        ))}
                     </TransitionGroup>
                  </div>
               </div>
            </Modal>
         </div>
      )
   }
}

export { Notification }
