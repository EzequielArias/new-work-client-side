import { CloseBtn,
        ModalBackground,
        ModalContainer,
        TextDescription,
        LoadFile,
        LabelFile,
        CurrentImage,
        BorderWithArrow,
        ImagesContainer,
        ArrowContainer,
        PublishPost
        } from './styled-components'
import { BsFileEarmarkDiff} from 'react-icons/bs';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useForm, useFetchAndLoad } from '../../hooks';
import { FormPostState, Token } from '../../interfaces';
import { createNewPost } from '../../services';

export const ModalForm = ({setModal} : any) => {
    const formData = useRef(new FormData());
  
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
    },800)

    const initialState : FormPostState = {
      description : "",
      images : [],
      currentIndexImg : 0
    }
    const { callEndpoint } = useFetchAndLoad();
    const { form, formChange, setForm, err, errs} = useForm<FormPostState>(initialState)
    
    const handleCreateBase64 = useCallback(async (e : any) => {
      if(!e.target.files) return 
      const files : File[] = Array.from(e.target.files);

        for (let i = 0; i < e.target.files.length; i++) {
          formData.current.append('file', e.target.files[i])
        }

        for (let i = 0; i < files.length; i++) {
           const base64 : any = await convertToBase64(files[i]);
           setForm((current) => {
            return {
                ...current,
                images : [...current.images, base64]
            }
        })
        }
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
    let imgAux : string = form.images[form.currentIndexImg];

    const handlePhotos = (direction: string) => {
        if (direction === "left") {
          setForm((current : any) => {
            if (form.currentIndexImg - 1 < 0) {
              return {
                ...current,
                currentIndexImg: form.images.length - 1,
              };
            }
            // ######
            return {
              ...current,
              currentIndexImg: form.currentIndexImg - 1,
            };
          });
        }
    
        if (direction === "right") {
          setForm((current : any) => {
            if (form.currentIndexImg + 1 > form.images.length - 1) {
              return {
                ...current,
                currentIndexImg: 0,
              };
            }
    
            return {
              ...current,
              currentIndexImg : form.currentIndexImg + 1,
            };
          });
        }
      };
    let at = localStorage.getItem('current_user');
    /**
      Tengo que colocar un formData.set('description'), cambiar lo que va a recibit el servicio
      y pasarle el formData al servicio y testear si guarda el post
     */
    const uploadPost = async (e : any) => {
        e.preventDefault()
        formData.current.set('description', form.description)
        if(at){
        let token : Token = JSON.parse(at) 
        const { data } =  await callEndpoint(createNewPost(formData.current, token.access_token))
        console.log(data)
      }
    }

  return (
    <>
        <ModalBackground>
            <ModalContainer>
                <CloseBtn onClick={() => setModal(false)}>
                    X 
                </CloseBtn>
                <TextDescription 
                  placeholder='¿ Que te gustaria compartir ?' 
                  rows={0} 
                  onChange={formChange}
                  value={form.description}
                  name="description"
                  />
                <LabelFile htmlFor='LoadFile'><BsFileEarmarkDiff/></LabelFile>
                <input 
                type='file' 
                id='LoadFile' 
                onChange={handleCreateBase64}
                accept='image/png,image/jpeg,image/jpg'
                name='files'
                multiple
                />
                {
                    form.images.length > 0
                    && 
                    <ImagesContainer>

                        <CurrentImage 
                            src={imgAux} 
                            alt='' 
                            />
                            
                    <ArrowContainer>
                        <BorderWithArrow 
                        onClick={() => handlePhotos('left')}
                            style={ form.images.length > 0 
                                    ? { display : 'block'} 
                                    : { display : 'none'}}>
                                    <BiLeftArrow/>
                        </BorderWithArrow>

                        <BorderWithArrow 
                        onClick={() => handlePhotos('right')}
                        style={ form.images.length > 0 
                                    ? { display : 'block'} 
                                    : { display : 'none'}}>
                            <BiRightArrow/>
                        </BorderWithArrow>
                    </ArrowContainer>
                    </ImagesContainer>
                }
            { 
            form.description.length > 0 || form.images.length > 0 
            ? ( <PublishPost onClick={uploadPost}>Subir</PublishPost> ) 
            : ""
            }
            </ModalContainer>
        </ModalBackground>
    </>
    )
}
