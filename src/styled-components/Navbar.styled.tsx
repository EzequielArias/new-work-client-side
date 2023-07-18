import styled from  'styled-components'
import { Root } from './constants'
import { Link } from 'react-router-dom'

export const Header = styled.header 
`
    height : 20vh;
    background-color : ${Root.__HeaderColors};
    width : 100%;

    display : flex;
`

export const SeasonSection = styled.nav 
`
    width : 80%;

    display : flex;
    justify-content : flex-end;
    align-items : center;
`

export const BtnLog = styled(Link) 
`
text-decoration : none;

color : black;
background-color : white;
padding : 10px 5px 10px 5px;
margin : 5px;
border-radius : 15px;

    &:hover {
        background-color : ${Root.__BtnSignHover};
        color : white;
    }
`

export const Logo = styled.img 
`
height : 100%;
width : 20%;
`


