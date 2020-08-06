import { SmartFoodManagementStore } from './SmartFoodManagementStore'
import { SmartFoodManagementEditStore } from './SmartFoodManagementEditStore'

import HomePageFixtureServices from '../services/HomePageServices/HomePageAPI.fixture'
import EditPageFixtureServices from '../services/EditPageServices/EditPageAPI.fixtures'

const homePageFixtureServices = new HomePageFixtureServices()
const smartFoodManagementStore = new SmartFoodManagementStore(
   homePageFixtureServices
)

const editPageFixtureServices = new EditPageFixtureServices()
const smartFoodManagementEditStore = new SmartFoodManagementEditStore(
   editPageFixtureServices
)

export default { smartFoodManagementEditStore, smartFoodManagementStore }
