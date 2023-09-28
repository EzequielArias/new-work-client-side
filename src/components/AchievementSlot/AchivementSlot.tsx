// Interfaces & Types
import { AchievementSlotParams, WorkOrEducationInterface } from "../../interfaces/WorkOrEducation.type"
import { StoreType } from "../../redux/store"

// styled-components
import {
  MainTitle,
  CardContainer,
  CardSubContainer,
  ImageContainer,
  ImgTag,
  InfoContainer,
  TitleWrap,
  EmptySlot
} from "./styled-components"

// Redux hooks
import { useSelector } from "react-redux"

// react icons
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { Root } from "../../styled-components/constants";

// React Router Hooks
import { useLocation } from "react-router-dom";

export const AchivementSlot = ({
  title,
  height,
  iterableData,
  setModal
}: AchievementSlotParams) => {

  const { AchivementSlotForm } = useSelector((state: StoreType) => state.style)
  const location = useLocation()

  const handleModal = () => {
    setModal(true)
  }

  return (
    <>
      <MainTitle><span>{title}
        {
          location.pathname.includes('/profile')
            ? (<><AiOutlinePlus
              onClick={handleModal}
            /> <HiOutlinePencilSquare /> </>) : (<></>)
        }
      </span></MainTitle>
      <CardContainer
        height={height}
        onClick={() => console.log(AchivementSlotForm)}
      >
        {
          iterableData.length > 0 ?
            (
              iterableData.map((el: WorkOrEducationInterface) => {
                if (!el.start || !el.end) return (<div>NO hay nada</div>);

                let start = new Date(el.start),
                  end = new Date(el.end)

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
                      <p>{`${start.getMonth()} ${start.getFullYear()}`} - {`${end.getMonth()} ${end.getFullYear()}`}</p>
                      <span>Titulacion : {el.institution}</span>
                    </InfoContainer>
                  </CardSubContainer>
                )
              })
            ) :
            (<CardSubContainer>
              <EmptySlot>Seccion vacia</EmptySlot>
            </CardSubContainer>)
        }
      </CardContainer>
    </>
  )
}

