import styled from 'styled-components';
import { Root } from './constants';

export const FormContainer = styled.section 
`
width : 100%;
height : 80vh;

display : flex;
justify-content : center;
align-items : center;

background-color : ${Root.__Cyan_color}
`

export const GoogleLogin = styled.button 
`
display:flex;
justify-content : space-evenly;
align-items : center;
font-size : 1em;

margin : 1em;
margin-left : 30%;
margin-right : 30%;

border-radius : 15px;
border : none;
background-color : white;
box-shadow: 1px 1px 9px 1px black;

 &:hover {
    transform : scale(1.1);
    cursor : pointer;
 }

 & > svg {
    font-size : 30px;
    background-color :
 }
`

export const FormBox = styled.form 
`
height : 60%;
width : 50%;
background-color : white;

display : flex;
flex-direction : column;
justify-content : center;

box-shadow : -30px 30px 20px rgba(0,0,0,0.3);
`

export const InputBox = styled.section 
`
    display : flex;
    flex-direction : column;
    margin-top : 2em;
    margin-left : 20%;
    margin-right : 20%;
    margin-bottom : 10px;
`

export const InputField = styled.input 
`
    margin : 1em;
    border-radius : 15px;
    padding : 2px;
    &::placeholder {
        text-align : center;
    }
`
export const ButtonLog = styled.button 
`
padding : 5px;
margin-left : 30%;
margin-right : 30%;
border-radius : 15px;
background-color : #54eaff;
border : 0.5px solid gray;

&:hover {
    opacity : 0.7;
    background-color : #a87bc7;
    cursor : pointer;
}
`

export const Line = styled.span 
`
border-bottom : 0.5px solid gray;
border-bottom-style : inset;
border-bottom-left-radius : 50%;
border-bottom-right-radius : 50%;
`