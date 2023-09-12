import { AchivementSlot } from '../../../components'

// styled-components
import { ModalBoxContainer, 
         ModalMainBox, 
         FlexSection, 
         InstitutionInput, 
         DescriptionInput, 
         DateInput 
        } from '../../../styled-components';
import { ResumeSlotContainer } from '../styled-component'
import { useForm, useFetchAndLoad } from '../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkExperience } from '../../../services';
import { fillWorkExperience } from '../../../redux/states';
import { Token, WorkOrEducationInterface } from '../../../interfaces';
import { useState } from 'react';
import { StoreType } from '../../../redux/store';

export const WorkSlotContainer = () => {
    
    const initialState : WorkOrEducationInterface= {
        id : "",
        start : "",
        end : "",
        description : "",
        institution : ""
    }
    //AiOutlinePlus

    const at : Token = JSON.parse(localStorage.getItem("current_user") as string);

    // Hooks
    const { callEndpoint, loading } = useFetchAndLoad();
    const { form, formChange } = useForm(initialState);
    const [modal, setModal] = useState<boolean>(false);
    const { workExperience } = useSelector((state: StoreType) => state.experience);
    const dispatch = useDispatch()

    const handleModalMainBoxClick = (e: React.MouseEvent) => {
        // Evitar que el evento se propague al ModalBoxContainer
        e.stopPropagation();
    };

    const handleSubmit1 = async () => {
          const { data } = await callEndpoint(addWorkExperience(form, at))
          dispatch(fillWorkExperience(data.payload))
      }

  return (
    <>
        {modal &&
        (
          <ModalBoxContainer onClick={(e: React.MouseEvent) => { e.stopPropagation(); setModal(false) }}>
            <ModalMainBox onClick={handleModalMainBoxClick}>
              <FlexSection flex_direction="column" height="height : 100%;">
                <InstitutionInput
                  type="text"
                  name="institution"
                  placeholder="nombre de la institucion..."
                  onChange={formChange}
                />
                <DescriptionInput
                  name="description"
                  placeholder="un resumen del puesto..."
                  onChange={formChange}
                />
                <FlexSection flex_direction="row">
                  <DateInput type="date" name="start" onChange={formChange} />
                  <DateInput type="date" name="end" onChange={formChange} />
                </FlexSection>
              </FlexSection>
              <span onClick={handleSubmit1} style={{ color : "yellow"}}>SUBMIT</span>
            </ModalMainBox>
          </ModalBoxContainer>
        )}
        <ResumeSlotContainer>
        <AchivementSlot
        title={"Experiencia laboral"}
        height={"200px"}
        iterableData={workExperience}
        setModal={setModal}
        />
    </ResumeSlotContainer>
    </>
  )
}
