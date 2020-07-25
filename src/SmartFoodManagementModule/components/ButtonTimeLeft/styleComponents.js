import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const ButtonStyles = css`
   ${tw` flex justify-center text-center text-white rounded focus:outline-none hover:bg-blue-900 hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   background: #0b69ff;
   cursor: 'pointer';
   padding: 8px 16px;
   width: 270px;
   font-size: 14px;
   height: 35px;
   color: 'white';
`

export const DisabledButtonStyles = css`
   ${tw` flex justify-center text-center text-white rounded focus:outline-none hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   background: #d7dfe9;
   cursor: 'pointer';
   padding: 8px 16px;
   width: 270px;
   font-size: 14px;
   height: 35px;
   color: 'white';
`
export const MealTime = styled.div`
   ${tw` flex justify-center text-center`}
   padding: 8px 16px;
   width: 270px;
   height: 35px;
   color: 'white';
`
export const IAteButtonStyles = css`
   ${tw` flex justify-center text-center text-white rounded focus:outline-none hover:bg-blue-900 hover:text-white  focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 128px;
   height: 35px;
   border-radius: 4px;
   background-color: #0b69ff;
   cursor: 'pointer';
   padding: 8px 16px;
   font-size: 14px;
   color: 'white';
`
export const ISkippedButtonStyles = css`
   ${tw` flex justify-center text-center text-white rounded focus:outline-none hover:bg-blue-900 hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 128px;
   height: 35px;
   border-radius: 4px;
   background-color: 'white';
   border: 1px solid #e4e9f0;
   cursor: 'pointer';
   padding: 8px 16px;
   font-size: 14px;
   color: 'white';
   margin-left: 10px;
`
