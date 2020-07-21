import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import Config from '../../../CommonModule/constants/EnvironmentConstants'
import { endpoints } from '../endpoints'
class AuthAPI {
   api
   constructor() {
      this.api = create({ baseURL: Config.BASE_URL })
   }

   signInAPI = requestObject => {
      return networkCallWithApisauce(
         this.api,
         endpoints.login,
         requestObject,
         apiMethods.post
      )
   }
}

export { AuthAPI }
