import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {
   Typo16DarkBlueGreyHKGroteskMedium,
   Typo12SteelHKGroteskRegular
} from '../../../CommonModule/styleGuide/Typos'
import { colors } from '../../../CommonModule/components/themes/colors'
import { css } from '@emotion/core'

const {
   jade,
   lightBlueGrey,
   yellowOrange,
   red,
   ice,
   offWhite,
   redInside
} = colors

export const HomeMainDiv = styled.div`
   display: flex;
   flex-direction: column;
`
export const HomeBannerDiv = styled.div`
   height: 350px;
   width: 100%;
`
export const HomeWeeklyStats = styled.div`
   margin-bottom: 5%;
`

export const HomeDate = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin: 10px;
   margin-bottom: 5%;
`
export const CardDiv = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
   margin-bottom: 60px;
   padding: 20px;
`

export const SubCardDiv = styled.div`
   ${tw`shadow-lg hover:shadow-6xl hover:rounded-lg hover:bg-blue-100`};
   display: block;
   justify-content: space-around;
   position: relative;
   width: 350px;
   height: 340px;
   border-radius: 4px;
   padding: 32px 24px;
   margin: 12px;
   text-decoration: none;
   z-index: 0;
   overflow: hidden;
   border: 1px solid lightblue;
`

export const Div1 = styled.div`
   display: flex;
   justify-content: space-around;
`

export const Div2 = styled.div`
   display: flex;
   justify-content: space-between;
   height: 70%;
   padding: 20px;
`

export const Div2Slide1 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: space-around;
   margin: 10px;
   height: 100%;
`
export const Div2Slide2 = styled.div`
   display: flex;
   flex-direction: column;
   margin: 10px;
   align-items: space-around;
   height: 100%;
`

export const EachItem = styled.div`
   display: flex;
   flex-direction: column;
`

export const Div1Image = styled.img`
   border: 2px solid #d7dfe9;
   padding: 10px;
   margin-top: 10px;
   margin-bottom: 10px;
   border-radius: 4px;
   background-color: '#d7dfe9';
`

export const Div1TypeTime = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 10px;
`
export const Div1Side1 = styled.div`
   display: flex;
   justify-content: space-between;
`

export const Div1Side2 = styled.div`
   display: flex;
   justify-content: center;
`

export const Buttons = styled.button`
   color: ${props =>
      props.className == 'FULL MEAL'
         ? '#1db05f'
         : props.className == 'CUSTOM'
         ? '#ffb800'
         : props.className == 'HALF MEAL'
         ? '#1db05f'
         : '#ff0b37'};
   background-color: ${props =>
      props.className == 'FULL MEAL'
         ? '#f3fff8'
         : props.className == 'CUSTOM'
         ? '#fff8e6'
         : props.className == 'HALF MEAL'
         ? '#f3fff8'
         : 'rgba(255, 11, 55, 0.05)'};
   border: ${props =>
      props.className == 'FULL MEAL'
         ? `1px solid ${colors.jade}`
         : props.className == 'CUSTOM'
         ? `1px solid ${colors.yellowOrange}`
         : props.className == 'HALF MEAL'
         ? `1px solid ${colors.jade}`
         : `1px solid ${colors.red}`};
   margin-top: 10px;
   margin-bottom: 10px;
   padding: 5px;
   border-radius: 4px;
   font-size: 12px;
   width: 100px;
   height: 24px;
   &:hover {
      width:105px;
      height:30px;
      transition: all $transition;
`

export const Div1Type = styled(Typo16DarkBlueGreyHKGroteskMedium)``

export const Div1Time = styled(Typo12SteelHKGroteskRegular)`
   display: flex;
   margin: 2px;
`
export const ButtonStyles = css`
   ${tw` flex justify-center text-center text-white rounded focus:outline-none hover:bg-blue-900 hover:text-white focus:shadow-outline`}
   background:#0b69ff;
   cursor: 'pointer';
   padding: 8px 16px;
   width: 270px;
   font-size: 14px;
   height: 35px;
   color: 'white';
`

export const Div3 = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 10px;
`
