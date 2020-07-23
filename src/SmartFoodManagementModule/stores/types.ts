export interface BannerDataResponse {
   background_image: string
   image_matter: string
   image_sub_matter: string
   image_content_matter: string
}

export interface MenuItemsResponse {
   breakfast: Array<MenuItemsTypes>
   lunch: Array<MenuItemsTypes>
   dinner: Array<MenuItemsTypes>
}

export interface MenuItemsTypes {
   start_time: string
   end_time: string
   meal_preference: string
   items_list: Array<string>
}
