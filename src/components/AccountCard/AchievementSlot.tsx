import {
  MainTitle,
  CardContainer,
  CardSubContainer,
  ImageContainer,
  ImgTag,
  InfoContainer,
  TitleWrap
} from "./styled-components"

export const AchievementSlot = ({ title, height }: { title: string, height: string }) => {

  let arr = [1,2,3,4,5,6]

  return (
    <>
      <MainTitle><span><b>{title}</b></span></MainTitle>
      <CardContainer height={height}>

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
