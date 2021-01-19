import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {
   Typo32DarkBlueGreyHKGroteskMedium,
   Typo14DarkBlueGreyHKGroteskRegular
} from '../../../CommonModule/styleGuide/Typos'

const ProfileDiv = styled.div`
    ${tw`flex fixed top-0 right-0 z-10 w-1/4`}
    width:${props => (!props.shouldDisplayCart ? '0%' : '')};
    transition: width 0.3s;
    overflow-y:hidden;
`
const DeleteButton = styled.button`
   ${tw`h-12 p-3 text-white bg-red-200 text-lg hover:bg-red-900 focus:outline-none active:outline-none leading-none`}
`
const ProfileMainDiv = styled.div`
   ${tw`h-screen bg-white flex flex-col w-full items-center justify-between`}
   background-image:url('https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/1EF5DE62-7625-4D11-9FBE-9E5857031650.png');
   background-repeat: repeat;
   padding-bottom: 20%;
   box-shadow: 1px 2px 15px 10px grey;
`

const SignoutButton = styled(Typo14DarkBlueGreyHKGroteskRegular)`
   ${tw`flex justify-around items-center rounded font-bold text-lg hover:bg-white hover:text-black text-white border-2 border-red-200 w-1/3`}
   height: 50px;
`

const NotificationIcon = styled.button`
   ${tw`text-white hover:bg-blue-900 hover:text-white hover:border-3 hover:border-red-400`}
   width: 50px;
   height: 50px;
   border: 2px solid white;
   border-radius: 4px;
   padding: 10px;
   margin: 15px;
`

const NotifyNum = styled.div`
   position: absolute;
   top: 80px;
   left: 445px;
   border-radius: 50%;
   border: 1px solid red;
   background-color: red;
   height: 20px;
   width: 20px;
   font-size: 12px;
   padding: 2px;
   color: white;
`

const BorderButton = styled.div`
   ${tw`z-10 w-full flex justify-center text-white h-100`}
`

const ProfileImage = styled.img`
   ${tw`border-gray-800 cursor-pointer h-24 w-18 m-2 p-1 rounded hover:text-xl text-xs`}
   border-radius:50%;
`
const AccountCenterDiv = styled.div`
   ${tw`flex w-full items-center justify-between h-64`}
   opacity: 0.8;
`

const EmailId = styled(Typo32DarkBlueGreyHKGroteskMedium)`
   ${tw`font-bold text-sm text-white text-lg`}
   margin-top:10px;
`

const AccountCenterP = styled(Typo32DarkBlueGreyHKGroteskMedium)`
   ${tw`font-bold text-white text-2xl`}
`

const UserOptions = styled.div`
   ${tw`flex w-full flex-col text-white h-64 justify-around items-center`}
`

const Option = styled(Typo32DarkBlueGreyHKGroteskMedium)`
   ${tw`flex w-full justify-around items-center text-white font-bold text-lg cursor-pointer hover:text-`}
`

const AccountCenter = styled.div`
   ${tw`flex flex-col w-full justify-between items-center`}
`

export {
   ProfileDiv,
   DeleteButton,
   ProfileMainDiv,
   SignoutButton,
   ProfileImage,
   AccountCenterDiv,
   EmailId,
   AccountCenterP,
   UserOptions,
   Option,
   AccountCenter,
   BorderButton,
   NotificationIcon,
   NotifyNum
}
