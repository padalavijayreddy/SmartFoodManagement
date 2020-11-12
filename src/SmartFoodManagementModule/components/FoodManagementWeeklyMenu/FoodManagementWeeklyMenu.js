import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithHeaderComponent from '../../../CommonModule/hocs/withHeader'
import './index.scss'
import { observable } from 'mobx'
import Slider from '../NetflixSlider'
import {
   HeadingDiv,
   PortalDiv,
   FacebookSlideBarDiv,
   MainContentDiv,
   AdminButton
} from './styledComponents'
import { ReactCountDown } from '../../../CommonModule/ReactCountDown'

const Images = [
   {
      id: 1,
      image: '/images1/FoodImage1.jpg',
      imageBg: '/images1/FoodImage1b.webp',
      title: 'Schedule Menu',
      imageMatter:
         'Schedule Menu is a place where the Admin will add the food items which will be publicly seen.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.',
      noteMatter: 'Update the menu before the starting of the meal preparation.'
   },
   {
      id: 2,
      image: '/images1/FoodImage2.jpg',
      imageBg: '/images1/FoodImage2b.webp',
      title: 'Admin Portal',
      imageMatter:
         'Schedule Menu is a place where the Admin will add the food items which will be publicly seen.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.',
      noteMatter: 'Update the portal after completion of every meal.'
   },
   {
      id: 3,
      image: '/images1/FoodImage3.jpg',
      imageBg: '/images1/FoodImage3b.webp',
      title: 'Meal Menu Feedback',
      imageMatter:
         'Schedule Menu is a place where the Admin will add the food items which will be publicly seen.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.',
      noteMatter:
         'Rating will be given for every meal so check according to that.'
   },
   {
      id: 4,
      image: '/images1/FoodImage4.jpg',
      imageBg: '/images1/FoodImage4b.webp',
      title: 'Food Log',
      imageMatter:
         'Schedule Menu is a place where the Admin will add the food items which will be publicly seen.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.',
      noteMatter:
         'Rating will be given for every meal so check according to that.'
   },
   {
      id: 5,
      image: '/images1/FoodImage5.jpg',
      imageBg: '/images1/FoodImage5b.webp',
      title: 'Weekly Menu',
      imageMatter:
         'Schedule Menu is a place where the Admin will add the food items which will be publicly seen.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.',
      noteMatter:
         'Rating will be given for every meal so check according to that.'
   },
   {
      id: 6,
      image: '/images1/FoodImage6.jpg',
      imageBg: '/images1/FoodImage6b.webp',
      title: 'Charity Purpose',
      imageMatter:
         'Schedule Menu is a place where the Admin will add the food items which will be publicly seen.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.Admin Portal is a place where the Admin will give the data of how much amount of food has been prepared and how much wasted.',
      noteMatter:
         'Rating will be given for every meal so check according to that.'
   }
]

@observer
class FoodManagementWeeklyMenu extends Component {
   @observable imageStatus = 'Schedule Meal'

   render() {
      return (
         <div onClick={this.props.toggleDisplayCartFalse} className='app'>
            <AdminButton onClick={this.props.onChangeAdminRoutes}>
               Admin Portal
            </AdminButton>
            <Slider>
               {Images.map(image => (
                  <Slider.Item image={image} key={image.id}>
                     Image1
                  </Slider.Item>
               ))}
            </Slider>
            <HeadingDiv>Click any one of Above Cards to Open Portal</HeadingDiv>
            {/* <ReactCountDown /> */}
         </div>
      )
   }
}

export default WithHeaderComponent(FoodManagementWeeklyMenu)
