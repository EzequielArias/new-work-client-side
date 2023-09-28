
//components
import { WhatWeDo, BriefCase, Resume, Customh2, TextContainer } from "../../styled-components"
import React, { useEffect } from 'react'


export const LandingPage = () => {
  const arr = [1,2,3,4,5,6,7,8,9,10]
  const referencia = React.useRef<HTMLUListElement | null>(null)
  useEffect(() => {
    console.log(referencia.current)
    if(referencia.current){
      //@ts-ignore
      console.log(referencia.current.querySelector("li > div"))
    }
  },[])
  
  return (
    <>
        <WhatWeDo>
          <BriefCase/>
          <TextContainer>
            <ul ref={referencia}>
              {
                arr.map((el) => {
                  return (
                    <li key={el}>
                      <div>
                        {el}
                      </div>
                    </li>
                  )
                })
              }
            </ul>
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

