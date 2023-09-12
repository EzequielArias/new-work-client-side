import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';
import { CardSubContainerProps } from '../../../interfaces';

export const MainTitle = styled.div
`
display : flex;
margin-left : 10px;
color : #f2f6f7;
padding : 10px;
font-size : 20px;
border-bottom : 0.5px solid gray;
& * > {
  padding : 3px;
  &:hover {
    background-color : ${Root.__Primary_color};
    cursor : pointer;
  }
}
`

export const CardContainer = styled.div<CardSubContainerProps>
`
overflow-y : scroll;
max-height : ${props => props.height};
color : #f2f6f7;
width : 90%;
padding : 10px;
`
// 0f3942
export const CardSubContainer = styled.div
`
display : flex;
background-color : #002e39;

&:hover {
  background-color : #0f3942;
  cursor : pointer;
  
}
`

export const ImageContainer = styled.div 
`
display : flex;
align-items : center;
justify-content : center;
width : 30%;
height : 100%;
`

export const ImgTag = styled.img 
`
height: 6.5em; 
`
// style={{ display: 'flex', 
//flexDirection: 'column', justifyContent: 'center', width: '70%' }}
export const InfoContainer = styled.div 
`
display : flex;
flex-direction : column;
justify-content : center;
width : 70%;

> span,
> p {
  font-size: 15px;
}
`
// style={{ display: 'flex', justifyContent: 'flex-start', color: 'black' }}
export const TitleWrap = styled.div
`
    display : flex;
    justify-content : flex-start;

    & > span {
        font-size : 25px;
        font-weight : 900;
    }
`
export const EmptySlot = styled.span 
`
    width : 100%;
    text-align : center;
    font-size : 30px;
    padding : 20px 0 20px 0;
`