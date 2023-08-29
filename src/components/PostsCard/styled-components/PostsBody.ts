import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';

export const PostsContainer = styled.div 
`
    display : flex;
    flex-direction : column;
    background-color : ${Root.__Primary_color};

    height : 550px;
    margin : 15px 30% 15px 30%;
`

export const PostBox = styled.div 
`
    background-color : ${Root.__Secondary_color};
    height : 90%;
    padding : 15px;
`

export const Description = styled.p 
`
padding-bottom : 10px;
`

export const PostImages = styled.img 
`
width : 100%;
height : 350px;
`

export const CardRelative = styled.div 
`
    position : relative;
`

export const CardArrowNext = styled.div 
`
position: absolute;
top: 49%;
transform: translate(0, -50%);
right: 32px;
font-size: 45px;
color: #fff;
z-index: 1;
cursor: pointer;
height : 95%;
text-align : center;
display : flex;
justify-content : center;
align-items : center;

&:hover {
    background-color: rgba(0, 0, 0, 0.5);
}
`

export const CardArrowPrevius = styled.div 
`
position: absolute;
top: 49%;
transform: translate(0, -50%);
left: 32px;
font-size: 45px;
color: #fff;
z-index: 1;
cursor: pointer;
height : 95%;
text-align : center;
display : flex;
justify-content : center;
align-items : center;

&:hover {
    background-color: rgba(0, 0, 0, 0.5);
}
`
