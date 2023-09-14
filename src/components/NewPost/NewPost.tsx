import { ProfileImg } from "../../styled-components"
import { FormPostContainer, NewPost } from "./styled-components"
import { useState } from "react";
import { ModalForm } from "./ModalForm";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";

export const PostForm = () => {

  const [modal, setModal] = useState(false);
  const { image, name } = useSelector((state : StoreType) => state.account)

  return (
    <>
      <FormPostContainer>
        <ProfileImg src={image} alt={name} />
        <NewPost 
          onClick={() => setModal(true)}>Crear Publicacion</NewPost>
      </FormPostContainer>
      { modal && <ModalForm setModal={setModal} />}
    </>
  )
}

