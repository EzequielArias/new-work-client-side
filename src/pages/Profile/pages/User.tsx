import { useCallback } from "react";

import { AcademicSlotContainer, WorkSlotContainer } from "../components";
// React hooks
import { useEffect } from "react";

// Styled-components
import { NewProfilePhoto, 
         Photo, 
         PhotoProfileSection, 
         SelectedViewContainer, 
         TitleSection,
         LabelPhoto,
         GParagraph,
         MyNameContainer,
         NewName,
         BtnContainer,
         BTNsendData
        } from "../styled-component";
import { ErrorWarning } from "../../../styled-components";

import { BsFillQuestionSquareFill } from 'react-icons/bs';

//Redux-hooks
import { useDispatch, useSelector } from "react-redux";

// Custom Hooks
import { useForm, useFetchAndLoad } from "../../../hooks";

// Interfaces & Types
import { Token, UserProfile } from "../../../interfaces";
import { StoreType } from "../../../redux/store";

// Axios services
import { getEducation, getExperience } from "../../../services"; 

// Redux actions
import { fillWorkExperience, fillAcademic } from "../../../redux/states";

export const User = () => {
    const dispatch = useDispatch()
    const { image, name } = useSelector((user : StoreType) => user.account)
    const { callEndpoint, loading } = useFetchAndLoad()

    const at : Token = JSON.parse(localStorage.getItem('current_user') as string);

    let initialState = {
        avatar : "",
        name : "",
        academic : [],
        workplace : []
    }

    const { form, setForm, err, errs, formChange} = useForm<UserProfile>(initialState)

    const handleCreateBase64 = useCallback(async (e : any) => {
        const files = e.target.files[0];
        const base64 : any = await convertToBase64(files);
        setForm((current) => {
            return {
                ...current,
                avatar : base64
            }
        })
        e.target.value = ""
    },[])

    const convertToBase64 = (file : any) => {
        return new Promise((resolve, reject)  => {
            const fileReader = new FileReader();           
            if(!file){
                alert('Selecciona una imagen')
            }else{
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result)
                }
            }

            fileReader.onerror = (err) => {
                reject(err)
            } 
        })
    }
    useEffect(() => {
        const getData = async () => {
            const academic1 = await callEndpoint(getEducation(at)),
                  work1 = await callEndpoint(getExperience(at))
                  dispatch(fillWorkExperience(work1.data.payload))
                  dispatch(fillAcademic(academic1.data.payload))
        }
        getData()
      return () => {
        
      }
    }, [])
    
  return (
        <SelectedViewContainer>
            <TitleSection>Avatar</TitleSection>
            <GParagraph>
                Clickeando el signo de "?" vas a poder elegir una nueva foto de perfil
            </GParagraph>
            <PhotoProfileSection>
                <Photo src={image} alt=""/>
                <LabelPhoto 
                    htmlFor="new-profile-photo">
                        { form.avatar 
                        ? <Photo src={form.avatar} alt=""/> 
                        : <BsFillQuestionSquareFill/>
                        }
                </LabelPhoto>
                <NewProfilePhoto 
                    type="file" 
                    id="new-profile-photo"
                    onChange={(e : any) => handleCreateBase64(e)}
                />
            </PhotoProfileSection>
            <ErrorWarning style={{textAlign : 'center', width : '100%'}}>{err.length > 0 ? 'Error super epico' : ''}</ErrorWarning>
            <TitleSection>Tu nombre</TitleSection>
            <GParagraph>
                Coloca tu nombre y apellidos
            </GParagraph>
            <MyNameContainer>
                        <NewName 
                            type="text" 
                            name="name" 
                            placeholder={name} 
                            value={form.name}
                            onChange={(e : any) => formChange(e)}
                            />
            </MyNameContainer>
            <ErrorWarning style={{textAlign : 'center', width : '100%'}}>{err.length > 0 ? 'Error super epico' : ''}</ErrorWarning>
            <TitleSection>Formacion</TitleSection>


            <AcademicSlotContainer/>
            
            <TitleSection>Experiencia laboral</TitleSection>
            
            <WorkSlotContainer/>

            <BtnContainer>
                <BTNsendData>Subir cambios</BTNsendData>
            </BtnContainer>
        </SelectedViewContainer>
    )
}
