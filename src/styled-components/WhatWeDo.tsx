import styled from 'styled-components'
import { Root } from './constants'
import { BsBriefcase } from 'react-icons/bs'

export const WhatWeDo = styled.section 
`
    background-color : ${Root.__WWD_color};

    width : 100%;

    display : flex;
    justify-content : center;
    align-items : center;
`

export const TextContainer = styled.div 
`
display : flex;
flex-direction : column;
align-items : center;
justify-content : space-between;
`

export const Customh2 = styled.h2 
`
background-color : ${Root.__WWD_color};
text-align : end;
margin-bottom : 20px;
`
export const Resume = styled.p 
`
height : 100%;
margin-left : 10px;
padding-left : 30px;
padding-right : 30px;
`

export const BriefCase = styled(BsBriefcase) 
`
    color : ${Root.__HeaderColors};
    width : 40%;
    height : 60%;
`
