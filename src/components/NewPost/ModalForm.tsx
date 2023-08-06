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
import { useState, useCallback, useEffect } from 'react';
import { useForm } from '../../hooks';
import { FormPostState } from '../../interfaces';

export const ModalForm = ({setModal} : any) => {
    
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
    },800)

    const initialState : FormPostState = {
      description : "",
      images : [],
      currentIndexImg : 0
    }

    const { form, formChange, setForm, err, errs} = useForm<FormPostState>(initialState)

/** Lo unico que tengo que hacer es remplazar form por form y setForm entonces
 * voy a poder utilizar mi hook generico ya aplicando de antemano las funciones para
 * leer imagenes y pasar datos limpios a el form este componente se encarga de limpiar imagenes
 * para un manejo correcto con el useForm
 */
    const handleCreateBase64 = useCallback(async (e : any) => {
        const files = e.target.files[0];
        const base64 : any = await convertToBase64(files);
        setForm((current) => {
            return {
                ...current,
                images : [...current.images, base64]
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

    useEffect(() => {

    },
    [
        handlePhotos,
        handleCreateBase64,
        form
    ])

    let imgAux : string = form.images[form.currentIndexImg];
    console.log(form)
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
                <LoadFile 
                type='file' 
                id='LoadFile' 
                onChange={(e) => handleCreateBase64(e)}
                accept='image/*, png, jpeg, jpg'
                ></LoadFile>
                {
                    form.images.length > 0
                    && 
                    <ImagesContainer>

                        <CurrentImage 
                            src={imgAux} 
                            alt='' 
                            key={form.currentIndexImg}
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
            { form.description.length > 0 || form.images.length > 0 ? ( <PublishPost>Subir</PublishPost> ) : ""}
            </ModalContainer>
        </ModalBackground>
    </>
    )
}
