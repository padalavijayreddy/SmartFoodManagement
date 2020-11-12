import tw from 'tailwind.macro'
import styled from '@emotion/styled'

export const DatePickers = styled.div`
   ${tw` flex justify-center self-center text-center focus:outline-none focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 140px;
   height: 45px;
   padding: 12px;
   padding-left: 27px;
   font-size: 14px;
   border: 1px solid #d7dfe9;
   text-align: center;
`
export const DatePickersDiv = styled.div`
   ${tw`flex self-center items-start`}
`
export const Button = styled.button`
   ${tw` flex justify-center self-center text-center rounded focus:outline-none hover:text-white focus:shadow-outline`}
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   width: 50px;
   height: 45px;
   border-radius: 4px;
   background-color: 'white';
   border: 1px solid #d7dfe9;
   padding-top: 15px;
   font-size: 14px;
   &:hover {
      background-color: #e6e6e6;
   }
`
