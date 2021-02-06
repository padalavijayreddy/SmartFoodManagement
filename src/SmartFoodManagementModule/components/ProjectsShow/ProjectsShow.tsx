import React, { Component } from 'react'
import Button from '../../../CommonModule/components/Button/Button'
import { ProjectButtonStyles, CardDiv, Card, Header } from './styledComponents'

const Projects = [
   {
      id: 0,
      name: 'Project 1',
      img: '/Images/project1.png'
   },
   {
      id: 1,
      name: 'Project 2',
      img: '/Images/project2.png'
   },
   {
      id: 2,
      name: 'Project 3',
      img: '/Images/project5.png'
   },
   {
      id: 3,
      name: 'Project 4',
      img: '/Images/Project6.jpeg'
   },
   {
      id: 4,
      name: 'Project 5',
      img: '/Images/project7.png'
   },
   {
      id: 5,
      name: 'Project 6',
      img: '/Images/project8.png'
   },
   {
      id: 6,
      name: 'Project 7',
      img: '/Images/project9.png'
   },
   {
      id: 7,
      name: 'Project 8',
      img: '/Images/project9.png'
   },
   {
      id: 8,
      name: 'Project 9',
      img: '/Images/project9.png'
   }
]

interface projectsProps {
   projectsNavigate: (id) => void
}

class ProjectsShow extends Component<projectsProps> {
   projectsList = () => {
      return Projects.map(eachProject => {
         return (
            <Card state={eachProject.img}>
               <Header>{eachProject.name}</Header>
               <Button
                  text='Click Here'
                  dataTestId='Project-button'
                  ButtonStyles={ProjectButtonStyles}
                  onClick={() => this.props.projectsNavigate(eachProject.id)}
               />
            </Card>
         )
      })
   }
   render() {
      return <CardDiv>{this.projectsList()}</CardDiv>
   }
}

export { ProjectsShow }
