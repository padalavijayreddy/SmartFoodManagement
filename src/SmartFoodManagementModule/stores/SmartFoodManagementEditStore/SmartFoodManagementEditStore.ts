import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { editPreferencesListType } from '../types'
import EditPreferencesDataModel from '../models/EditPreferencesDataModel'

class SmartFoodManagementEditStore {
   @observable editPreferencesList!: EditPreferencesDataModel
   @observable getEditPreferencesAPIStatus!: any
   @observable getEditPreferencesAPIError!: any
   editPageAPI: any

   constructor(EditPageAPI: any) {
      this.editPageAPI = EditPageAPI
      this.init()
   }

   @action.bound
   init() {
      this.editPreferencesList
      this.getEditPreferencesAPIStatus = API_INITIAL
      this.getEditPreferencesAPIError = null
   }

   @action.bound
   clearStore() {
      this.init()
   }

   @action.bound
   getEditPreferencesList(mealType) {
      const editPreferencesListPromise = this.editPageAPI.EditPreferencesAPI(
         mealType
      )
      return bindPromiseWithOnSuccess(editPreferencesListPromise)
         .to(this.setGetEditPreferencesAPIStatus, (response: any) => {
            this.setGetEditPreferencesAPIResponse(response)
         })
         .catch(error => {
            this.setGetEditPreferencesAPIError(error)
         })
   }

   @action.bound
   setGetEditPreferencesAPIStatus(apiStatus: number) {
      this.getEditPreferencesAPIStatus = apiStatus
   }

   @action.bound
   setGetEditPreferencesAPIError(apiError: string) {
      this.getEditPreferencesAPIError = apiError
   }

   @action.bound
   setGetEditPreferencesAPIResponse(apiResponse: editPreferencesListType) {
      console.log('apiResponse', apiResponse)
   }
}

export { SmartFoodManagementEditStore }
