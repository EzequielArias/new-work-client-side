import styled from 'styled-components';
import { Root } from './constants';
import { FlexSectionType } from '../interfaces';

export const ModalBoxContainer = styled.div 
`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index : 1;

    top : 0;
    left : 0;
`

export const ModalMainBox = styled.div 
`
    background-color : ${Root.__Primary_color};
    height : 90%;
    width : 50%;
    z-index : 10;
`

export const FlexSection = styled.span<FlexSectionType>  
`
    display : flex;
    flex-direction : ${props => props.flex_direction};
    align-items : center;
    justify-content : center;
    ${props => props.height}
    width : 100%;
`

export const DateInput = styled.input 
`
    margin : 20px 10px 20px 10px;
    background : ${Root.__Secondary_color};
    outline : none;
    border : none;
    padding : 20px;    
    flex-grow : 1;
`

export const DescriptionInput = styled.textarea 
`
    margin : 20px 0 20px 0;
    width : 95%;
    padding : 1px 5px 40px 5px;
    font-size : 16px;
    background : ${Root.__Secondary_color};
    color : ${Root.__Hover_color};
    border : none;
    outline : none;

    &::placeholder {
        text-align : justify;
    }
`

export const InstitutionInput = styled.input 
`
    width : 95%;
    outline : none;
    margin : 20px 0 20px 0;
    padding : 18px 10px 18px 10px;
    font-size : 16px;
    color : ${Root.__Hover_color};
    border : none;
    background : ${Root.__Secondary_color};
`