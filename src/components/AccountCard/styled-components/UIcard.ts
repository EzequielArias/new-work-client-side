import styled from 'styled-components';

export const AccountContainer = styled.section 
`
    background-color : #0f3942;
    height : 100vh; 
    display : flex;
    justify-content : center;
    align-items : center;
    color : #f2f6f7;
    border : 1px solid rgba(200,200,200,0.2);
`

export const UIpersonCard = styled.div 
`
background-color : #002e39;
width : 95%;
height : 95%;
border-radius : 15px;

display : flex ; 
justify-content : center;
align-items : center;
`

export const SectionLeft = styled.section `
width : 50%;
height : 100%;

display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`

export const SectionRight = styled.section 
`
width : 50%;
height : 100%;
`

export const PersonInfoContainer = styled.div 
`
display : flex;
justify-content : center;
align-items : center;
width : 100%;
`

export const PersonInformation = styled.div 
`
display : flex; 
flex-direction : column ;
width : 70%;
justify-content : center;
align-items : center;
`

export const Name = styled.span 
`
color : white;
font-size : 1.5em;
`

export const Degree = styled.h2 
`
font-size : 3.5em;
font-weight: 900;
`

export const ProfileImgContainer = styled.div 
`
display : flex;
justify-content : center;
align-items : center;
width : 30%;
`

export const ProfileIMG = styled.img 
`
width : 10em;
height : 10em;
border : 1px solid white;
border-radius : 50%;
`

export const CoverLetter = styled.p `
margin : 10px;
overflow-y : scroll;
height : 200px;
`
