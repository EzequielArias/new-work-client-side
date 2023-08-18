
// Styled-components
import { Header,
         BtnLog, 
         SeasonSection, 
         VerticalLine, 
         ProfileImg,
         NavbarProfileContainer,
         UserName 
      } from "../../styled-components"

import { Token, User } from "../../interfaces";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";

//Actions
import { setUserData } from "../../redux/states";

// Hooks
import { useEffect } from "react";
import { useFetchAndLoad } from "../../hooks";

// Services & Adapter
import { GetUserRegister } from "../../services";

export const Navbar = () => {

  const dispatch = useDispatch();
  const { callEndpoint } = useFetchAndLoad();
  const { name, email, image} = useSelector((user : StoreType) => user.account)

  const at : string | null = localStorage.getItem('current_user');

  useEffect(() => {

    const handleTokens = async () => {
      if(at){

          let parse : Token = JSON.parse(at)
          // Tengo que crear una ruta en el back que solo sirva para pedir data del usuario
          const { data } = await callEndpoint(GetUserRegister(parse.access_token));
          dispatch(setUserData(data))
      }
    }
    handleTokens()
    return () => {
  
    }
  },[at])

  return (
    <Header>
        {
           name && 
           email && 
           image ? 
          (
          <>
          <span>LOGO</span>
        <SeasonSection>
          <NavbarProfileContainer to={'/profile'}>
          <ProfileImg src={image} alt={name}/>
          <UserName>{name}</UserName>
          </NavbarProfileContainer>
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
