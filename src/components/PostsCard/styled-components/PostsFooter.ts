import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';

export const PostFooterContainer = styled.div 
`
    display : flex;
`

export const ItemBtn = styled.button 
`
    display : flex;
    flex-grow : 4;
    padding : 0.5em;

    justify-content : space-evenly;
    align-items : center;

    background-color : ${Root.__Primary_color};
    border : 1px solid ${Root.__Secondary_color};
    color : ${Root.__Font_color};

    &:hover {
        cursor : pointer;
        background-color : ${Root.__Secondary_color};
    }

    & * {
        font-size : 1.5em;
        opacity : 0.9;
    }
`

export const TextBtn = styled.span 
`
    font-weight : bold;
`