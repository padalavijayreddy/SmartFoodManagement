import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ShowModel = () => (
   <Modal style={{ height: 400, margin: 1000 }} open={true} size='large'>
      <Modal.Content image>
         <Modal.Description>
            <Header>BREAKFAST</Header>
            <p>
               We've found the following gravatar image associated with your
               e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
         </Modal.Description>
         <Image
            wrapped
            size='medium'
            src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/b69f1a68-b1d7-4eed-b1b0-f9a60a3e3595.png'
         />
      </Modal.Content>
   </Modal>
)

export { ShowModel }
