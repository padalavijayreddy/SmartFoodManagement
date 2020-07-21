import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   setAccessToken,
   clearUserSession,
   getAccessToken,
   ACCESS_TOKEN
} from '../../utils/StorageUtils'
import { getUserDisplayableErrorMessage } from '../../../CommonModule/utils/APIUtils'
import { RequestProps, LoginResponse } from './types'

class AuthStore {
   @observable getUserSignInAPIStatus: any
   @observable getUserSignInAPIError: any
   authAPI: any

   constructor(AuthAPI: any) {
      this.authAPI = AuthAPI
      this.init()
   }

   @action.bound
   init() {
      this.getUserSignInAPIError = null
      this.getUserSignInAPIStatus = API_INITIAL
   }

   @action.bound
   clearStore() {
      this.init()
   }

   @action.bound
   userSignIn(
      requestObject: RequestProps,
      onSuccess: () => void,
      onFailure: () => void
   ) {
      const signInPromise = this.authAPI.signInAPI(requestObject)
      return bindPromiseWithOnSuccess(signInPromise)
         .to(this.setGetUserSignInAPIStatus, (response: any) => {
            this.setUserSignInAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setGetUserSignInAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setGetUserSignInAPIStatus(apiStatus: number) {
      this.getUserSignInAPIStatus = apiStatus
   }

   @action.bound
   setGetUserSignInAPIError(apiError: string) {
      this.getUserSignInAPIError = getUserDisplayableErrorMessage(apiError)
   }

   @action.bound
   setUserSignInAPIResponse(signInResponse: LoginResponse | null) {
      console.log('Response', signInResponse)
      if (signInResponse != null) setAccessToken(signInResponse.access_token)
   }

   @action.bound
   userSignOut(): void {
      clearUserSession()
   }
}

export { AuthStore }
