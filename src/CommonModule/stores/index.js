import CounterStore from './CounterStore'
import AuthStores from '../../AuthenticationModule/stores'
import SmartFoodManagementStores from '../../SmartFoodManagementModule/stores'

const counterStore = new CounterStore()

export default {
   counterStore,
   ...AuthStores,
   ...SmartFoodManagementStores
}
