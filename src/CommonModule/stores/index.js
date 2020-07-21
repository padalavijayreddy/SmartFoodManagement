import CounterStore from './CounterStore'
import AuthStores from '../../AuthenticationModule/stores'

const counterStore = new CounterStore()

export default {
   counterStore,
   ...AuthStores
}
