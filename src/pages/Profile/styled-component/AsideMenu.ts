import styled from 'styled-components';
import { Root } from '../../../styled-components/constants';

// Common components

export const SelectedViewContainer = styled.div 
`
width : 100%;
background-color : ${Root.__Secondary_color};
`

export const TitleSection = styled.h2 
`
font-size : 35px;
font-weight : bold;
color : ${Root.__Font_color};
margin-top : 50px;
margin-left : 50px;
letter-spacing : 0.5px;
`

export const ParagraphContainer = styled.div 
`
    
`

export const GParagraph = styled.p 
`
    text-align : center;
    color : ${Root.__Font_color};
`

// AsideMenu components 

export const ProfilePageContainer = styled.div 
`
width : 100%;
display : flex;
`

/**
    AsideMenu Header components
 */

export const AsideHeader = styled.section 
`
    display : flex;
    flex-direction : column;
    align-items : center;
`

export const AsideUserImg = styled.img 
`
height : 80px;
width : 80px;
border-radius : 45%;
margin : 5px;
margin-top : 15px;
`

export const AsideCurrentProfile = styled.h2 
`
margin : 5px;
color : ${Root.__Font_color};
`

// End of Header Components

export const AsideMenuContainer = styled.aside 
`
width : 20%;
background-color : ${Root.__Primary_color};
`

export const MenuItemContainer = styled.ul 
`
height : 100vh;
display : flex;
flex-direction : column;
align-items : center;
`

export const MenuItem = styled.li
`
list-style : none;
text-decoration : none;
text-align : center;
display : flex;
align-items:center;
justify-content:center;
width : 100%;
padding : 15px;
margin-top : 5px;
margin-bottom : 5px;
color : ${Root.__Font_color};
font-weight : 600;

    &:hover {
        cursor : pointer;
        background-color : ${Root.__Secondary_color};
    }

    & > * {
        margin : 5px;
    }
`