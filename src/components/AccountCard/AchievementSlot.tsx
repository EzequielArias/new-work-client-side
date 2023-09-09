import { useSelector } from "react-redux"
import {
  MainTitle,
  CardContainer,
  CardSubContainer,
  ImageContainer,
  ImgTag,
  InfoContainer,
  TitleWrap
} from "./styled-components"
import { StoreType } from "../../redux/store"
import { useState } from "react"
import { ModalBox } from "../"
import { DateInput, DescriptionInput, FlexSection, InstitutionInput } from "../../styled-components"
import { useForm } from "../../hooks"
import { Token, WorkExperienceState } from "../../interfaces"
import { useFetchAndLoad } from "../../hooks"
import { addWorkExperience } from "../../services"

export const AchievementSlot = ({ title, height }: { title: string, height: string }) => {

  const { AchivementSlotForm } = useSelector((state : StoreType) => state.style);
  const [ modal, setModal] = useState<boolean>(false)
  const { callEndpoint, loading } = useFetchAndLoad();
  
  const at : Token = JSON.parse(localStorage.getItem('current_user') as string);

  let arr = [1,2,3,4,5,6]
  
  const validateDates = (dates  : {start : Date, end : Date}) => 
  dates.end > dates.start ? true : false;

  const initialState : WorkExperienceState = {
    institution : "",
    description : "",
    start : null,
    end : null
  }
  const { form, formChange } = useForm(initialState)

  const submitWorkExperience = async () => {
    
    if(form.end && form.start){
    const val = validateDates({start : form.start, end : form.end})
    if(val){
      const { data } = await callEndpoint(addWorkExperience(form, at))
      console.log(data)
    } 
    }else return false
  }

  return (
    <>
      { modal && 
      (
      <ModalBox  setModal={setModal}>
        <span onClick={submitWorkExperience}>SUBMIT</span>
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
              <DateInput type="date" name="start" onChange={formChange}/>
              <DateInput type="date" name="end" onChange={formChange}/>
           </FlexSection>
        </FlexSection>
      </ModalBox>
      )}
      <MainTitle><span><b>{title}</b></span></MainTitle>
      <CardContainer 
       height={height}
       onClick={() => AchivementSlotForm ? setModal(!modal) : ""}
       >

      {
        arr.map((m0 : any) => {
            return (
        <CardSubContainer>
          <ImageContainer>
            <ImgTag
              src="https://museodeladeuda.econ.uba.ar/wp-content/uploads/2014/10/Logo-UBA-nuevo-blanco.png"
              alt=""
            />
          </ImageContainer>
          <InfoContainer >
            <TitleWrap>
              <span><b>Universidad de Buenos Aires</b></span>
            </TitleWrap>
            <p>2021 - 2023</p>
            <span>Titulacion : Ingenieria en informatica lorem*5</span>
          </InfoContainer>
        </CardSubContainer>
            )
        })
      }
        </CardContainer>
    </>
  )
}
