import getBannerData from '../../fixtures/getBannerData.json'
import getMenuItems from '../../fixtures/getMenuItems.json'

class HomePageFixtureServices {
   BannerDataAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(getBannerData), 2000)
      })
   }

   MenuItemsAPI = date => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(getMenuItems), 2000)
      })
   }
}

export default HomePageFixtureServices
