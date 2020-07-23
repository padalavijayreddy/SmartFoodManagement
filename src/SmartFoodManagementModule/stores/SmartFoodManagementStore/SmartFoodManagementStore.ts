import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { BannerDataResponse, MenuItemsResponse } from '../types'
import BannerDataModel from '../models/BannerDataModel'
import MenuItemsModel from '../models/MenuItemsModel'
import MenuTypeModel from '../models/MenuTypeModel'

class SmartFoodManagementStore {
   @observable bannerDataList!: Array<BannerDataModel>
   @observable getBannerDataAPIStatus: any
   @observable getBannerDataAPIError: any
   @observable menuItemsList!: Array<MenuTypeModel>
   @observable getMenuItemsAPIStatus: any
   @observable getMenuItemsAPIError: any
   homePageAPI: any

   constructor(HomePageAPI: any) {
      this.homePageAPI = HomePageAPI
      this.init()
   }

   @action.bound
   init() {
      this.bannerDataList = []
      this.getBannerDataAPIStatus = API_INITIAL
      this.getBannerDataAPIError = null
      this.menuItemsList = []
      this.getMenuItemsAPIStatus = API_INITIAL
      this.getMenuItemsAPIError = null
   }

   @action.bound
   clearStore() {
      this.init()
   }

   @action.bound
   getBannerDataList() {
      const BannerDataListPromise = this.homePageAPI.BannerDataAPI()
      return bindPromiseWithOnSuccess(BannerDataListPromise)
         .to(this.setGetBannerDataAPIStatus, (response: any) => {
            this.setGetBannerDataAPIResponse(response)
         })
         .catch(error => {
            this.setGetBannerDataAPIError(error)
         })
   }

   @action.bound
   setGetBannerDataAPIStatus(apiStatus: number) {
      this.getBannerDataAPIStatus = apiStatus
   }

   @action.bound
   setGetBannerDataAPIError(apiError: string) {
      this.getBannerDataAPIError = apiError
   }

   @action.bound
   setGetBannerDataAPIResponse(apiResponse: Array<BannerDataResponse> | null) {
      if (apiResponse) {
         this.bannerDataList = apiResponse.map(eachImage => {
            return new BannerDataModel(eachImage)
         })
      }
   }

   @action.bound
   getMenuItemsList() {
      const MenuItemsListPromise = this.homePageAPI.MenuItemsAPI()
      return bindPromiseWithOnSuccess(MenuItemsListPromise)
         .to(this.setGetMenuItemsAPIStatus, (response: any) => {
            this.setGetMenuItemsAPIResponse(response)
         })
         .catch(error => {
            this.setGetMenuItemsAPIError(error)
         })
   }

   @action.bound
   setGetMenuItemsAPIStatus(apiStatus: number) {
      this.getMenuItemsAPIStatus = apiStatus
   }

   @action.bound
   setGetMenuItemsAPIError(apiError: string) {
      this.getMenuItemsAPIError = apiError
   }

   @action.bound
   setGetMenuItemsAPIResponse(apiResponse: Array<MenuItemsResponse> | null) {
      if (apiResponse) {
         this.menuItemsList = apiResponse.map(eachMenuType => {
            return new MenuTypeModel(eachMenuType)
         })
      }
   }
}

export { SmartFoodManagementStore }
