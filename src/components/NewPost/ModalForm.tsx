import { CloseBtn,
        ModalBackground,
        ModalContainer,
        TextDescription,
        LoadFile,
        LabelFile,
        CurrentImage,
        BorderWithArrow,
        ImagesContainer,
        ArrowContainer
        } from './styled-components'
import { BsFileEarmarkDiff} from 'react-icons/bs';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { useState, useCallback, useEffect } from 'react';

export const ModalForm = ({setModal} : any) => {
    
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
    },1000)

    const [posts, setPosts] = useState<{ images : string[], currentIndexImg : number}>({
        images : [],
        currentIndexImg : 0
    })

    const handleCreateBase64 = useCallback(async (e : any) => {
        console.log('algo algo lao')
        const files = e.target.files[0];
        const base64 : any = await convertToBase64(files);
        setPosts((current ) => {
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
          setPosts((current) => {
            if (posts.currentIndexImg - 1 < 0) {
              return {
                ...current,
                currentIndexImg: posts.images.length - 1,
              };
            }
            // ######
            return {
              ...current,
              currentIndexImg: posts.currentIndexImg - 1,
            };
          });
        }
    
        if (direction === "right") {
          setPosts((current) => {
            if (posts.currentIndexImg + 1 > posts.images.length - 1) {
              return {
                ...current,
                currentIndexImg: 0,
              };
            }
    
            return {
              ...current,
              currentIndexImg : posts.currentIndexImg + 1,
            };
          });
        }
      };

    useEffect(() => {

    },
    [
        handlePhotos,
        handleCreateBase64
    ])

    let imgAux : string = posts.images[posts.currentIndexImg];

  return (
    <>
        <ModalBackground>
            <ModalContainer>
                <CloseBtn onClick={() => setModal(false)}>
                    X 
                </CloseBtn>
                <TextDescription rows={0} placeholder='¿ Que te gustaria compartir ?'/>
                <LabelFile htmlFor='LoadFile'><BsFileEarmarkDiff/></LabelFile>
                <LoadFile 
                type='file' 
                id='LoadFile' 
                onChange={(e) => handleCreateBase64(e)}
                accept='image/*, png, jpeg, jpg'
                ></LoadFile>
                {
                    posts.images.length > 0
                    && 
                    <ImagesContainer>

                        <CurrentImage 
                            src={imgAux} 
                            alt='' 
                            key={posts.currentIndexImg}
                            />
                            
                    <ArrowContainer>
                        <BorderWithArrow 
                        onClick={() => handlePhotos('left')}
                            style={ posts.images.length > 0 
                                    ? { display : 'block'} 
                                    : { display : 'none'}}>
                                    <BiLeftArrow/>
                        </BorderWithArrow>

                        <BorderWithArrow 
                        onClick={() => handlePhotos('right')}
                        style={ posts.images.length > 0 
                                    ? { display : 'block'} 
                                    : { display : 'none'}}>
                            <BiRightArrow/>
                        </BorderWithArrow>
                    </ArrowContainer>
                    </ImagesContainer>
                }
            </ModalContainer>
        </ModalBackground>
    </>
    )
}
