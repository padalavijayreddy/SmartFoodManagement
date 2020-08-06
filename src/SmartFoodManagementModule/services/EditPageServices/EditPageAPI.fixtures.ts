import getMealPreferences from '../../fixtures/getMealPreferences.json'

class EditPageFixtureServices {
   EditPreferencesAPI = mealType => {
      // console.log('mealType1', mealType)
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(getMealPreferences), 2000)
      })
   }
}
export default EditPageFixtureServices
