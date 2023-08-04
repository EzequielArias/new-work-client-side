import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';

export const PostsContainer = styled.div 
`
    display : flex;
    flex-direction : column;
    background-color : ${Root.__Primary_color};

    height : 550px;
    margin-left : 30%;
    margin-right : 30%;
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
`