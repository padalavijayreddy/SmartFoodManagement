import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../AuthenticationModule/utils/AuthUtils/AuthUtils'
import Config from '../../../CommonModule/constants/EnvironmentConstants'
import { apiMethods } from '../../../CommonModule/constants/APIConstants'
import { endpoints } from '../endpoints'

class HomePageServices {
   api
   constructor() {
      this.api = create({ baseURL: Config.BASE_URL })
   }

   BannerDataAPI = () => {
      return networkCallWithApisauce(
         this.api,
         endpoints.bannerData,
         {},
         apiMethods.post
      )
   }

   MenuItemsAPI = () => {
      return networkCallWithApisauce(
         this.api,
         endpoints.menuItems,
         {},
         apiMethods.post
      )
   }
}

export { HomePageServices }
