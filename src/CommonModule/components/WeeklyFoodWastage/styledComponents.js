import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {
   Typo32DarkBlueGreyHKGroteskMedium,
   Typo32BlackHKGrotestRegular
} from '../../styleGuide/Typos'

export const MainDiv = styled.div`
   padding-top: 30px;
   padding-left: 150px;
   padding-right: 150px;
   width: 100%;
   margin-top: 75px;
`
export const SubDiv = styled(Typo32DarkBlueGreyHKGroteskMedium)`
   width: 300px;
   border-bottom: 1px solid black;
   margin-bottom: 30px;
`
export const OverViewDiv = styled.div`
   display: flex;
   border: 1px solid grey;
   height: 60%;
   border-radius: 10px;
   padding: 30px;
   width: 100%;
   border: 1px solid lightblue;
`

export const Statistics = styled.div`
   display: flex;
   flex-direction: row;
`

export const Stats = styled.div`
   display: flex;
   flex-direction: column;
   padding: 15px;
   border: 1px solid lightgrey;
   margin: 50px;
`
export const FoodWasted = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: row;
   margin-left: 40px;
   margin-top: 40px;
   margin-right: 40px;
   margin-bottom: 10px;
   border-bottom: 1px solid black;
`
export const WastedKgs = styled.div`
   margin-right: 20px;
`
export const Kgs = styled(Typo32BlackHKGrotestRegular)`
   margin-bottom: 10px;
`
export const Content = styled.div`
   display: flex;
   align-self: flex-end;
   font-size: 12px;
   font-weight: normal;
   margin-bottom: 10px;
`
export const CanServedPeople = styled.div``
export const People = styled.div``
export const Percentage = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: row;
   margin-top: 20px;
   margin-left: 40px;
   margin-bottom: 20px;
   margin-right: 40px;
`
export const Percent = styled(Typo32BlackHKGrotestRegular)`
   color: red;
   display: flex;
   align-self: center;
`
export const Analysis = styled.div``

export const BarStat = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 1400px;
`
export const Small = styled.span`
   font-size: 12px;
   margin: 5px;
`
