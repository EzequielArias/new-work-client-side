import { AsideMenuContainer, MenuItemContainer, MenuItem, AsideHeader, AsideCurrentProfile, AsideUserImg } from "../styled-component"
import { ProfilePageSelector, Token, User } from "../../../interfaces"
import { useEffect, useState } from "react";

// Icons
import { CgProfile } from 'react-icons/cg';
import { IoSettingsSharp } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai'

//Redux-hooks
import { useSelector } from "react-redux";
import { StoreType } from "../../../redux/store";

export const AsideMenu = ({ setPage } : {setPage : React.Dispatch<React.SetStateAction<ProfilePageSelector>>}) => {
      
  const { name, image, email } = useSelector((user : StoreType) => user.account)
    
  const pageHandler = (command : string) => setPage((actual) => {
    return {
        ...actual,
        current : command
    }
  })

  return (
        <AsideMenuContainer>
            <AsideHeader>
                <AsideUserImg src={image} alt=""/>
                <AsideCurrentProfile>{name}</AsideCurrentProfile>
            </AsideHeader>
            <MenuItemContainer>
                <MenuItem onClick={() => pageHandler('profile')}><CgProfile/>Perfil</MenuItem>
                <MenuItem onClick={() => pageHandler('setting')}><IoSettingsSharp/>Configuracion</MenuItem>
                <MenuItem onClick={() => pageHandler('etwas')}><AiFillHome/>Inicio</MenuItem>
                <MenuItem onClick={() => pageHandler('loquesea')}>Logaritmo 4</MenuItem>
            </MenuItemContainer>
        </AsideMenuContainer>
    )
}
