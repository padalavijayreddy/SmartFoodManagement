import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import './BannerAnimation.css'
import BannerDataModel from '../../../SmartFoodManagementModule/stores/models/BannerDataModel'
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure'
import { observer } from 'mobx-react'
import NoDataView from '../../common/NoDataView'

interface BannerProps {
   bannerDataList: Array<BannerDataModel>
   getBannerDataAPIStatus: string
   getBannerDataAPIError: string
   doNetworkCalls: () => void
}

const BgElement = Element.BgElement
class BannerAnimation extends React.Component<BannerProps> {
   renderBannerDataList = observer(() => {
      const { bannerDataList } = this.props
      if (bannerDataList.length === 0) {
         return <NoDataView />
      } else {
         return (
            <BannerAnim prefixCls='banner-user' autoPlay>
               {bannerDataList.map(eachImage => {
                  return (
                     <Element prefixCls='banner-user-elem' key='0'>
                        <BgElement
                           key='bg'
                           className='bg'
                           style={{
                              backgroundImage: `url(${eachImage.backgroundImage})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                           }}
                        />
                        <TweenOne
                           className='banner-user-title'
                           animation={{ y: 30, opacity: 0, type: 'from' }}
                        >
                           {eachImage.imageMatter}
                        </TweenOne>
                        <TweenOne
                           className='banner-user-text'
                           animation={{
                              y: 30,
                              opacity: 0,
                              type: 'from',
                              delay: 100
                           }}
                        >
                           {eachImage.imageSubMatter}
                        </TweenOne>
                        <TweenOne
                           className='banner-user-highlight'
                           animation={{
                              y: 30,
                              opacity: 0,
                              type: 'from',
                              delay: 100
                           }}
                        >
                           {eachImage.imageContentMatter}
                        </TweenOne>
                     </Element>
                  )
               })}
            </BannerAnim>
         )
      }
   })

   render() {
      const {
         bannerDataList,
         getBannerDataAPIStatus,
         getBannerDataAPIError,
         doNetworkCalls
      } = this.props
      console.log('BannerComponent', bannerDataList)
      return (
         <LoadingWrapperWithFailure
            apiStatus={getBannerDataAPIStatus}
            apiError={getBannerDataAPIError}
            onRetryClick={doNetworkCalls}
            renderSuccessUI={this.renderBannerDataList}
         />
      )
   }
}

export { BannerAnimation }

// return (
// <BannerAnim prefixCls='banner-user' autoPlay>
//    <Element prefixCls='banner-user-elem' key='0'>
//       <BgElement
//          key='bg'
//          className='bg'
//          style={{
//             backgroundImage: `url('/Images/Image-1.png')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//          }}
//       />
//       <TweenOne
//          className='banner-user-title'
//          animation={{ y: 30, opacity: 0, type: 'from' }}
//       >
//          Announcement
//       </TweenOne>
//       <TweenOne
//          className='banner-user-text'
//          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
//       >
//          Weekly Menu Changed...
//       </TweenOne>
//       <TweenOne
//          className='banner-user-highlight'
//          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
//       >
//          Idly has been updated with poori on Monday due to requests
//          from South Indians
//       </TweenOne>
//    </Element>
// </BannerAnim>
// )
