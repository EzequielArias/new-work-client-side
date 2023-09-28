import styled from 'styled-components';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export const RelativeContainer = styled.div 
`
  height : 100vh;
  width : 100%;
  overflow : hidden;
  display : flex;
`

export const LeftArrow = styled(BsFillArrowLeftCircleFill) 
`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`

export const RightArrow = styled(BsFillArrowRightCircleFill) 
`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`