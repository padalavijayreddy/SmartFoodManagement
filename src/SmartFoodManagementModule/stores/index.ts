import { SmartFoodManagementStore } from './SmartFoodManagementStore'
import HomePageFixtureServices from '../services/HomePageServices/HomePageAPI.fixture'

const homePageFixtureServices = new HomePageFixtureServices()
const smartFoodManagementStore = new SmartFoodManagementStore(
   homePageFixtureServices
)

export default { smartFoodManagementStore }
