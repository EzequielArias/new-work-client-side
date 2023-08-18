import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';

export const LabelPhoto = styled.label 
`
    margin-left : 10px;
    color : ${Root.__Font_color};

    &:hover {
        cursor : pointer;
    }

    & > * {
        font-size : 100px;
    }
`

export const PhotoProfileSection = styled.section 
`
    display : flex;
    justify-content : center;
    align-items : center;

    margin-top : 30px;
`

export const Photo = styled.img 
`
    height : 100px;
    width : 100px;
`

export const NewProfilePhoto = styled.input 
`
    display : none;
`

export const MyNameContainer = styled.div 
`
    margin-top : 30px;
    display : flex;
    align-items: center;
    justify-content : center;
`

export const NewName = styled.input 
`
    padding : 5px;
    background-color : ${Root.__Secondary_color};
    border : 1px solid gray;
    outline : none;
    color : ${Root.__Font_color};

    &:focus {
        border : 1px solid ${Root.__Hover_color};
    }
`

export const BtnContainer = styled.div 
`
    margin-top : 30px;
    display : flex;
    justify-content : center;
    align-items : center;
`

export const BTNsendData = styled.button 
`
    background-color : ${Root.__Primary_color};
    border : none;
    padding : 10px;
    font-size : 15px;
    color : ${Root.__Font_color};

    &:hover {
        background-color : ${Root.__Hover_color};
        cursor : pointer;
    }
`

