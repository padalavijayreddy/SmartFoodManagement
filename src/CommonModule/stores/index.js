import CounterStore from './CounterStore'
import AuthStores from '../../AuthenticationModule/stores'
import { AuthStore } from '../../AuthenticationModule/stores/AuthStore'

const counterStore = new CounterStore()
const authStore = new AuthStore()

export default {
   counterStore,
   authStore
}
