import { action, observable } from 'mobx'
import { mealDataListType } from '../../types'

class EditEachMealPreferenceDataModel {
   @observable itemId: string
   @observable itemName: string
   @observable itemCateogary!: string
   @observable servingBaseUnit!: string
   @observable quantity!: number

   constructor(data: mealDataListType) {
      this.itemId = data.item_id
      this.itemName = data.item_name
      this.itemCateogary = data.item_cateogary
      this.servingBaseUnit = data.serving_base_unit
      this.quantity = data.quantity
   }
}

export default EditEachMealPreferenceDataModel
