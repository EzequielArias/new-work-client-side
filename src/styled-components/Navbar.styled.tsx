import styled from  'styled-components'
import { Root } from './constants'
import { Link, NavLink } from 'react-router-dom'

export const Header = styled.header 
`
    background-color : ${Root.__Primary_color};
    width : 100%;

    display : flex;
    align-items : center;
    justify-content : space-between;
    border-bottom: 1px solid rgba(135,153,160,0.25);
    padding : 10px;
`

export const SeasonSection = styled.nav 
`
    display : flex;
    justify-content : flex-end;
    align-items : center;

    color : ${Root.__Font_color}
`

export const BtnLog = styled(Link) 
`
text-decoration : none;

color : #f2f6f7;

margin : 5px;
border-radius : 15px;
font-size : 1em;
font-weight : bold;

    &:hover {
        color : ${Root.__Hover_color};
    }
`

export const VerticalLine = styled.div 
`
width: 0;
height: 2.5em; 
border-left: 1px solid gray;
margin-left : 5px;
margin-right : 5px;
`

export const Logo = styled.img 
`
height : 100%;
width : 20%;
`

export const NavbarProfileContainer = styled(NavLink) 
`
text-decoration : none;
color : ${Root.__Font_color};
width : 100%;
display : flex;
justify-content : space-around;
align-items : center;
padding : 5px;

&:hover {
    background-color : ${Root.__Secondary_color};
    cursor : pointer;
}
`

export const UserName = styled.span 
`
margin : 10px;
font-size : 17px;
`

export const ProfileImg = styled.img 
`
height : 50px;
width : 50px;
border-radius : 50%;
`

