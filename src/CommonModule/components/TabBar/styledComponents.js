import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { colors } from '../../../CommonModule/components/themes/colors'
const { darkBlueGrey, steel } = colors

export const TabBarView = styled.ul`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 1200px;
      height: 50px;
      background-color: ${colors.white};
      border-bottom: 1px solid lightgrey;
      margin-top: 30px;
      margin-bottom: 20px;
   `,
   Tab = styled.li`
      width: 120px;
      height: 20px;
      text-align: center;
      padding-bottom: 30px;
      font-family: HKGrotesk;
      font-size: 14px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: 0.12px;
      color: ${props => (props.border ? darkBlueGrey : steel)};
      border-bottom: ${props => (props.border ? '1px solid black' : '')};
      transition-duration: 0.3s;
      transition-timing-function: linear;
      transition: 0.25s ease-in;
      cursor: pointer;
   `
