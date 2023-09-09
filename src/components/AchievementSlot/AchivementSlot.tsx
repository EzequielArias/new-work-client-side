// Interfaces & Types
import { AchievementSlotParams, WorkOrEducationInterface } from "../../interfaces/WorkOrEducation.type"
import { StoreType } from "../../redux/store"

// styled-components
import { MainTitle, 
        CardContainer, 
        CardSubContainer, 
        ImageContainer, 
        ImgTag, 
        InfoContainer, 
        TitleWrap } from "./styled-components"

// Redux hooks
import { useSelector } from "react-redux"

export const AchivementSlot = ({
    title, 
    height,
    iterableData,
} : AchievementSlotParams) => {

  const { AchivementSlotForm } = useSelector((state : StoreType) => state.style)

  
  return (
    <>
    <MainTitle><span><b>{title}</b></span></MainTitle>
      <CardContainer 
       height={height}
       onClick={() => console.log(AchivementSlotForm)}
       >
        
      {
        iterableData.length > 0 ?
        (
          iterableData.map((el : WorkOrEducationInterface) => {
              if(!el.start || !el.end) return (<div>NO hay nada</div>);
  
              return (
          <CardSubContainer key={el.id}>
            <ImageContainer>
              <ImgTag
                src="https://museodeladeuda.econ.uba.ar/wp-content/uploads/2014/10/Logo-UBA-nuevo-blanco.png"
                alt=""
              />
            </ImageContainer>
            <InfoContainer >
              <TitleWrap>
                <span><b>{el.institution}</b></span>
              </TitleWrap>
              <p>{`${el.start}`} - {`${el.end}`}</p>
              <span>Titulacion : {el.institution}</span>
            </InfoContainer>
          </CardSubContainer>
              )
          })
        ) : 
        (<div>NO HAY NADA</div>)
      }
        </CardContainer>
        </>
  )
}

