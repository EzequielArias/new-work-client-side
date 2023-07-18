import styled from 'styled-components'
import { Root } from './constants'
import { Link } from 'react-router-dom'

export const FooterStyled = styled.footer 
`
    background-color : ${Root.__HeaderColors};

    display : flex;
    flex-direction : column;
    align-items : flex-end;
`

export const AuthorLink = styled(Link) 
`
width : 100%;
text-align : center;
text-decoration : none;
color : white;
&:hover {
    border-bottom : 1px solid white;
    color : gray;
}
`

export const LinksContainer = styled.div
`
display : flex;
justify-content : center;
align-items : center;
width : 100%;

& > * {
    margin : 10px;
    & > * {
        font-size : 30px;
        &:hover {
            transform : scale(1.1);
            color : gray;
        }
    }
}
`

export const SocialMedia = styled(Link)
`
color : white;
font-size : 1em;
`