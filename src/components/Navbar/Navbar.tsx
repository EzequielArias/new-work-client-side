// Assets
import  opportunitiesLogo from '../../assets/Opportunity.png'

// Styled-components
import { Logo, Header, BtnLog, SeasonSection } from "../../styled-components"

export const Navbar = () => {
  return (
    <Header>
        <Logo src={opportunitiesLogo} alt='logo'></Logo>
        <SeasonSection>
          <BtnLog to='/signin'>Iniciar sesion</BtnLog>
          <BtnLog to='signup'>Registrarse</BtnLog>
        </SeasonSection>
    </Header>    
  )
}
