import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../AuthenticationModule/utils/AuthUtils/AuthUtils'
import Config from '../../../CommonModule/constants/EnvironmentConstants'
import { apiMethods } from '../../../CommonModule/constants/APIConstants'
import { endpoints } from '../endpoints'

class EditPageServices {
   api
   constructor() {
      this.api = create({ baseURL: Config.BASE_URL })
   }
   EditPreferencesAPI = mealType => {
      return networkCallWithApisauce(
         this.api,
         endpoints.editPreferences,
         { mealType },
         apiMethods.get
      )
   }
}

export { EditPageServices }
