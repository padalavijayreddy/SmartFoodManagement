import { observable, action } from 'mobx'
import { BannerDataResponse } from '../../types'

class BannerDataModel {
   backgroundImage!: string
   imageMatter!: string
   imageSubMatter!: string
   imageContentMatter!: string

   constructor(data: BannerDataResponse) {
      this.backgroundImage = data.background_image
      this.imageMatter = data.image_matter
      this.imageSubMatter = data.image_sub_matter
      this.imageContentMatter = data.image_content_matter
   }
}
export default BannerDataModel
