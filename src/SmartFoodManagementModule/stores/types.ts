export interface BannerDataType {
   announcements: Array<BannerDataResponse>
}

export interface BannerDataResponse {
   background_image: string
   image_matter: string
   image_sub_matter: string
   image_content_matter: string
}

export interface MenuItemsType {
   meal_info: Array<MenuItemsResponse>
}

export interface MenuItemsResponse {
   meal_id: number
   meal_type: string
   meal_preference: string
   start_time: string
   end_time: string
   dead_line: string
   meal_status: string
   menu_items: Array<string>
}

export interface dateType {
   date: Date
}

export interface editPreferencesListType {
   meal_id: string
   meal_type: string
   user_meal_preference: string
   full_meal: Array<mealDataListType>
   half_meal: Array<mealDataListType>
   custom_meal: Array<mealDataListType>
   skipped: Array<mealDataListType>
}

export interface mealDataListType {
   item_id: string
   item_name: string
   item_cateogary: string
   serving_base_unit: string
   quantity: number
}
