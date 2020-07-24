import getBannerData from '../../fixtures/getBannerData.json'
import getMenuItems from '../../fixtures/getMenuItems.json'

class HomePageFixtureServices {
   BannerDataAPI = () => {
      console.log(getBannerData)
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(getBannerData), 2000)
      })
   }

   MenuItemsAPI = date => {
      console.log('date', date)
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(getMenuItems), 2000)
      })
   }
}

export default HomePageFixtureServices
