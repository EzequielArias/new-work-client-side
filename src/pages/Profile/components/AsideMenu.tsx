import { AsideMenuContainer, 
        MenuItemContainer, 
        MenuItem, 
        AsideHeader, 
        AsideCurrentProfile, 
        AsideUserImg,
        MenuLink 
    } from "../styled-component"
import { ProfilePageSelector } from "../../../interfaces"

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
                <MenuLink to={'/feed'}><AiFillHome/>Inicio</MenuLink>
            </MenuItemContainer>
        </AsideMenuContainer>
    )
}
