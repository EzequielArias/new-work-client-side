// styled-components
import { ResumeSlotContainer } from "../styled-component";
import { DateInput, 
        DescriptionInput, 
        FlexSection, 
        InstitutionInput, 
        ModalBoxContainer, 
        ModalMainBox 
      } from "../../../styled-components";
// Components
import { AchivementSlot } from "../../../components/AchievementSlot/AchivementSlot";

//  Custom Hooks
import { useForm, useFetchAndLoad } from "../../../hooks";

// Axios Services
import { addWorkExperience, addEducation } from "../../../services";

// React hooks
import React, { useEffect, useState } from "react";

// Redux hooks
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { achiviementSlotForm, fillAcademic, fillWorkExperience } from "../../../redux/states";

// Interfaces & Types
import { Token, ResumeSlotParams, WorkOrEducationInterface } from "../../../interfaces";
import { StoreType } from "../../../redux/store";

export const ResumeSlot = ({ initialForm, command, title } : ResumeSlotParams) => {
   // Token
   const at : Token = JSON.parse(localStorage.getItem("current_user") as string);

   // Hooks
   const [ modal, setModal] = useState<boolean>(false)
   const { form, formChange } = useForm(initialForm)
   const { callEndpoint } = useFetchAndLoad()
   const { workExperience, academic } = useSelector((state : StoreType) => state.experience)
   const dispatch = useDispatch();
   let iterableData : WorkOrEducationInterface[] | null = null;

  // Handle Functions. ###

  const handleModalMainBoxClick = (e: React.MouseEvent) => {
    // Evitar que el evento se propague al ModalBoxContainer
    e.stopPropagation();
  };

  const handleSubmit = async () => {
    if(command === "education")
    {
      const { data } = await callEndpoint(addEducation(form, at));
      dispatch(fillAcademic(data.payload))
    }

    if(command === "work")
    {
      const { data } = await callEndpoint(addWorkExperience(form, at))
      dispatch(fillWorkExperience(data.payload))
    }
  }
  /**
    <AchievementSlot
          title=""
          height="200px"
        />
   */
  if(command === "education") iterableData = academic;
  if(command === "work") iterableData = workExperience
  useEffect(() => {
    dispatch(achiviementSlotForm(true))
    
    return () => {
      
    }
  }, [iterableData])

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
              <span onClick={handleSubmit}></span>
            </ModalMainBox>
          </ModalBoxContainer>
        )}
      {
        iterableData  &&  <ResumeSlotContainer>
        <AchivementSlot
        title={title}
        height={"200px"}
        iterableData={iterableData}
        />
    </ResumeSlotContainer>
      }
    </>
  )
}

