import { FooterStyled, AuthorLink, LinksContainer, SocialMedia } from "../../styled-components";
import { BsLinkedin, BsGithub, BsPhone } from "react-icons/bs";

export const Footer = () => {
  return (
    <FooterStyled>
          <LinksContainer>
              <SocialMedia to=''>
                <BsLinkedin/>
              </SocialMedia>
              <SocialMedia to=''>
                <BsGithub/>
              </SocialMedia>
              <SocialMedia to=''>
                <BsPhone/>
              </SocialMedia>
          </LinksContainer>
            <AuthorLink to=''>This website was made by : Ezequiel Arias</AuthorLink>
    </FooterStyled>
  )
}
