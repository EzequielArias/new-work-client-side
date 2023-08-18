import { useCallback } from "react";

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
import { useSelector } from "react-redux";

import { useForm } from "../../../hooks";

import { UserProfile } from "../../../interfaces";
import { StoreType } from "../../../redux/store";

export const User = () => {

    const { image, name } = useSelector((user : StoreType) => user.account)

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
            <BtnContainer>
                <BTNsendData>Subir cambios</BTNsendData>
            </BtnContainer>
        </SelectedViewContainer>
    )
}
