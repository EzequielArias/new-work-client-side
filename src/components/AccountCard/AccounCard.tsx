import { UIpersonCard, AccountContainer, SectionLeft, PersonInfoContainer, ProfileImgContainer ,SectionRight, ProfileAccountCardImg, CoverLetter, PersonInformation, Name, Degree } from './styled-components/UIcard'
import { AchivementSlot } from '..'
import { useState } from 'react'
import { AccoundCardParams } from '../../interfaces'

export const AccounCard = ({ workExperience, academic, name, image, subtitle, coverLetter } : AccoundCardParams ) => {

  const [first, setfirst] = useState<boolean>(false)

  return (
    <AccountContainer>
       <UIpersonCard>
        <SectionLeft>
        <PersonInfoContainer>
        <ProfileImgContainer>
          <ProfileAccountCardImg src={image}/>
          </ProfileImgContainer>
          <PersonInformation>
            <Name>{name}</Name>
            <Degree>{subtitle}</Degree>
          </PersonInformation>
        </PersonInfoContainer>
          <h2 style={{marginTop : '20px', marginBottom : '20px'}}>Sobre mi</h2>
          <CoverLetter>
            {coverLetter}
          </CoverLetter>
        </SectionLeft>
        <SectionRight>
          <AchivementSlot 
          title='Experiencia' 
          height='50' 
          iterableData={workExperience} 
          setModal={setfirst}
          />
          <AchivementSlot 
          title="Educacion" 
          height='35' 
          iterableData={academic} 
          setModal={setfirst}
          />
        </SectionRight>
      </UIpersonCard>
    </AccountContainer>
  )
}

