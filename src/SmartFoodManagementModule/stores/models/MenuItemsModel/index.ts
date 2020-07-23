import { observable, action } from 'mobx'
import { MenuItemsTypes } from '../../types'

class MenuItemsModel {
   startTime!: string
   endTime!: string
   mealPreference!: string
   itemsList!: Array<string>

   constructor(data: MenuItemsTypes) {
      this.startTime = data.start_time
      this.endTime = data.end_time
      this.mealPreference = data.meal_preference
      this.itemsList = data.items_list
   }
}

export default MenuItemsModel
