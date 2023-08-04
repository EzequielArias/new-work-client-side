import { ProfileImg } from "../../styled-components"
import { FormPostContainer, NewPost } from "./styled-components"
import { useState } from "react";
import { ModalForm } from "./ModalForm";

export const PostForm = () => {

  const [modal, setModal] = useState(false);

  return (
    <>
      <FormPostContainer>
        <ProfileImg/>
        <NewPost 
          onClick={() => setModal(true)}>Crear Publicacion</NewPost>
      </FormPostContainer>
      { modal && <ModalForm setModal={setModal} />}
    </>
  )
}

