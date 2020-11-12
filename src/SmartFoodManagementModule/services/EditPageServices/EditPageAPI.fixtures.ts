import getMealPreferences from '../../fixtures/getMealPreferences.json'

class EditPageFixtureServices {
   EditPreferencesAPI = mealType => {
      // console.log('mealType1', mealType)
      return new Promise((resolve, reject) => {
         resolve(getMealPreferences)
      })
   }
}
export default EditPageFixtureServices
