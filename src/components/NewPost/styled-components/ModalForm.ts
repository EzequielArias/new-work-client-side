import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';

export const ModalBackground = styled.div 
`
  width: 100vw;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.9);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index : 1;
`

export const ModalContainer = styled.div 
`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const CloseBtn = styled.div 
`
    text-align : right;
    &:hover {
        cursor : pointer;
        color : black;
    }
`

export const TextDescription = styled.textarea 
`
    padding : 30px;
`

export const LoadFile = styled.input 
`
 display : none;
`

export const LabelFile = styled.label 
`
    margin-top : 10px;
    margin-bottom : 10px;
    padding : 5px;
    text-align : center;
    width : 10%;
    border-radius : 50%;
    font-size : 25px;
    color : black;
    border : 1px solid gray;

    &:hover {
      background-color : gray;
      cursor : pointer;
    }
`

export const ImagesContainer = styled.div 
`
    display : flex;
    flex-direction : column;
    height : 100%;
`

export const ArrowContainer = styled.div 
`
display : flex;
width : 100%;
`

export const BorderWithArrow = styled.span 
`
background-color : black;
text-align : center;
color : white;
width : 50%;

&:hover {
  color : ${Root.__Hover_color};
  cursor : pointer;
}
`

export const CurrentImage = styled.img 
`
  height : 240px;
  width : 100%;
`