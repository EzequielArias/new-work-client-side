// Assets

// Styled-components
import { useEffect } from "react";
import { Header, BtnLog, SeasonSection, VerticalLine } from "../../styled-components"

export const Navbar = () => {

  const currentUser = window.localStorage.getItem('current_user');

  useEffect(() => {
    
  }, [currentUser])

  return (
    <Header>
        {
          currentUser ? 
          (
          <>
          <span>LOGO</span>
        <SeasonSection>
          <VerticalLine/>
        </SeasonSection>
          </>
          ) : 
          (
            <>
            <span>LOGO</span>
        <SeasonSection>
          <BtnLog to='/signin'>Iniciar sesion</BtnLog>
          <VerticalLine/>
          <BtnLog to='/signup'>Registrarse</BtnLog>
        </SeasonSection>
            </>
          )

        }
    </Header>    
  )
}
