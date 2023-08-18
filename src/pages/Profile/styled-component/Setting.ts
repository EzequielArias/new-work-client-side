import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';

export const LogOutSection = styled.section 
`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`

export const LogOut = styled.button 
`
    margin-top : 20px;
    padding : 10px;
    background-color : red;
    border : none;
    color : ${Root.__Font_color};

    &:hover {
        cursor : pointer;
    }
`

