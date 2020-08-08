import { observable, action } from 'mobx'
import { editPreferencesListType, mealDataListType } from '../../types'
import EditEachMealPreferenceDataModel from '../EditEachMealPreferenceDataModel'

class EditPreferencesDataModel {
   @observable mealId!: string
   @observable mealType!: string
   @observable userMealPreferences!: string
   @observable fullMeal!: Array<any>
   @observable halfMeal!: Array<any>
   @observable customMeal!: Array<any>
   @observable skipped!: Array<any>

   constructor(data: editPreferencesListType) {
      this.mealId = data.meal_id
      this.mealType = data.meal_type
      this.userMealPreferences = data.user_meal_preference
      this.fullMeal = data.full_meal.map(eachItem => {
         return new EditEachMealPreferenceDataModel(eachItem)
      })
      this.halfMeal = data.half_meal.map(eachItem => {
         return new EditEachMealPreferenceDataModel(eachItem)
      })
      this.customMeal = data.custom_meal.map(eachItem => {
         return new EditEachMealPreferenceDataModel(eachItem)
      })
      this.skipped = data.skipped.map(eachItem => {
         return new EditEachMealPreferenceDataModel(eachItem)
      })
   }
}

export default EditPreferencesDataModel
