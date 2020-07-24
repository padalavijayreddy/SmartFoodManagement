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
   meal_id: string
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
