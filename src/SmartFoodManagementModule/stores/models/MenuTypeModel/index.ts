import { observable, action } from 'mobx'
import { MenuItemsResponse, MenuItemsTypes } from '../../types'
import MenuItemsModel from '../MenuItemsModel'

class MenuTypeModel {
   breakfast!: Array<MenuItemsTypes>
   lunch!: Array<MenuItemsTypes>
   dinner!: Array<MenuItemsTypes>

   constructor(data: MenuItemsResponse) {
      //   data.breakfast.map(eachItem =>
      //      this.breakfast.push(new MenuItemsModel(eachItem))
      //   )
   }
}

export default MenuTypeModel
