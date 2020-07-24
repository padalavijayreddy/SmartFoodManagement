import { observable, action } from 'mobx'
import { MenuItemsResponse } from '../../types'

class MenuItemsModel {
   mealId!: string
   mealType!: string
   mealPreference!: string
   startTime!: string
   endTime!: string
   deadLine!: string
   mealStatus!: string
   itemsList!: Array<string>

   constructor(data: MenuItemsResponse) {
      this.mealId = data.meal_id
      this.mealType = data.meal_type
      this.mealPreference = data.meal_preference
      this.startTime = data.start_time
      this.endTime = data.end_time
      this.deadLine = data.dead_line
      this.mealStatus = data.meal_status
      this.itemsList = data.menu_items
   }
}

export default MenuItemsModel
