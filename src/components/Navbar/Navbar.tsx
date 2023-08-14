// Assets

// Styled-components
import { useEffect, useState } from "react";
import { Header, BtnLog, SeasonSection, VerticalLine, ProfileImg } from "../../styled-components"
import { Token, User } from "../../interfaces";

export const Navbar = () => {

  const currentUser : string | null = window.localStorage.getItem('current_user');

  const [profile, setProfile] = useState<{ currentUser : User, Tokens : Token } | null>(null)

  useEffect(() => {
    
    return () => {
      if(typeof currentUser === 'string'){
        let user = JSON.parse(currentUser)
        setProfile(user)
     }
    }
  }, [currentUser])

  return (
    <Header>
        {
           profile ? 
          (
          <>
          <span>LOGO</span>
        <SeasonSection>
          <ProfileImg src={profile.currentUser.image}/>
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
