import React from "react"
import { ModalBoxContainer, ModalMainBox } from "../../styled-components"

interface MyComponentProps {
  children: React.ReactNode; // Puedes usar ReactNode en lugar de Element
  setModal : React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalBox : React.FC<MyComponentProps>= ({children , setModal } ) => {


  const handleModalMainBoxClick = (e: React.MouseEvent) => {
    // Evitar que el evento se propague al ModalBoxContainer
    e.stopPropagation();
  };


  return (
    <ModalBoxContainer onClick={(e : any) => {
      e.stopPropagation()
      setModal(false)
    }}>
        <ModalMainBox onClick={handleModalMainBoxClick}>
            {children}
        </ModalMainBox>
    </ModalBoxContainer>
  )
}

