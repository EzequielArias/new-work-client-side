
//components
import { WhatWeDo, BriefCase, Resume, Customh2, TextContainer } from "../../styled-components"



export const LandingPage = () => {
  return (
    <>
        <WhatWeDo>
          <BriefCase/>
          <TextContainer>
          <Customh2>¿Que es opportunities ?</Customh2>
          <Resume>Opportunities es un sitio web orientado a la busqueda de empleo o el reclutamiento del candidato perfecto si eres una empresa,
            La idea principal es facilitar la busqueda de ambas partes como utilizamos nuestras aplicaciones favoritas todos los dias
            por un algoritmo que se base en tus especificaciones seleccionadas y asi tener los mejores resultados.
          </Resume>
          </TextContainer>
        </WhatWeDo>
    </>
  )
}

