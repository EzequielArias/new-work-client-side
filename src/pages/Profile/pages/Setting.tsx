import { LogOut, 
         LogOutSection, 
         SelectedViewContainer, 
         TitleSection,
         GParagraph 
        } from "../styled-component"

export const Setting = () => {
  return (
        <SelectedViewContainer>
            <TitleSection>Preferencias</TitleSection>
            <LogOutSection>
                <GParagraph>
                    Al tocar el boton vas a cerrar tu sesion actual
                </GParagraph>
                <LogOut>cerrar sesion</LogOut>
            </LogOutSection>
        </SelectedViewContainer>
    )
}
