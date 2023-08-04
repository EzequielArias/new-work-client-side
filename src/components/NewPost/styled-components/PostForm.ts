import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';

export const FormPostContainer = styled.div 
`
    margin-top : 3px;
    margin-bottom : 10px;
    margin-left : 30%;
    margin-right : 30%;

    display : flex;
    justify-content : space-evenly;
    align-items : center;

    background-color : ${Root.__Primary_color};
    height : 50px;
    padding : 35px;
`

export const NewPost = styled.span 
`
    border : 0.5px solid gray;
    border-radius : 15px;
    background-color : ${Root.__Primary_color};
    width : 75%;
    padding : 15px;
    color : ${Root.__Font_color};

    &:hover {
        background-color : ${Root.__Secondary_color};
        cursor : pointer;
    }
`
