import React from 'react'
import { observer } from 'mobx-react'
import {
   GoBackView,
   BackToListDiv,
   BackArrow,
   BackToListP,
   SelectedTaskDiv
} from './GoBackStyle'

@observer
class GoBack extends React.Component {
   navigateBack = () => {
      this.props.projectsNavigate()
   }

   render() {
      const { projectName } = this.props
      return (
         <GoBackView>
            <BackToListDiv>
               <BackArrow
                  onClick={this.navigateBack}
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/eeab89d1-4929-482b-84ba-406ffdb282e6.svg'
                  alt='goBack'
               ></BackArrow>
               <BackToListP>Back To List</BackToListP>
            </BackToListDiv>
            <SelectedTaskDiv>{projectName}</SelectedTaskDiv>
         </GoBackView>
      )
   }
}

export default GoBack
