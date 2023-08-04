import { UIpersonCard, AccountContainer, SectionLeft, PersonInfoContainer, ProfileImgContainer ,SectionRight, ProfileAccountCardImg, CoverLetter, PersonInformation, Name, Degree } from './styled-components/UIcard'
import { AchievementSlot } from './AchievementSlot'
import wolf from '../../assets/TheWitcher.jpg'

export const AccounCard = () => {
  return (
    <AccountContainer>
       <UIpersonCard>
        <SectionLeft>
        <PersonInfoContainer>
        <ProfileImgContainer>
          <ProfileAccountCardImg src={wolf}/>
          </ProfileImgContainer>
          <PersonInformation>
            <Name>Gerald The rivia</Name>
            <Degree>The witcher</Degree>
          </PersonInformation>
        </PersonInfoContainer>
          <h2 style={{marginTop : '20px', marginBottom : '20px'}}>Sobre mi</h2>
          <CoverLetter>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quod aperiam odio molestiae veniam. Ratione obcaecati eveniet culpa aspernatur reiciendis. Tenetur placeat et quisquam inventore ex laboriosam sunt ut esse?
          Eum et itaque quam, vel, ipsum quos eveniet eos consectetur hic, possimus dolores velit illo? Blanditiis soluta incidunt eos quasi exercitationem provident labore dolores amet reiciendis tempora? Minus, ipsa ad?
          Ducimus id doloremque dolores earum ab dolorem, saepe minus minima numquam veniam libero fugit, nemo explicabo, similique molestias dolore tempore corporis laborum quibusdam ipsam. Eius earum eaque quasi magnam error.
          Voluptatum iure exercitationem, rerum dolor necessitatibus cupiditate ipsam! Quia, fugiat maiores. Sint nesciunt porro, quas totam doloremque quibusdam debitis cumque veniam enim qui dolore, aspernatur ea tenetur facere quis illo!
          Commodi ab et nisi reprehenderit ex eius minus ea unde quaerat labore maiores tempore sit magnam exercitationem aspernatur pariatur qui est, repudiandae distinctio numquam saepe recusandae minima. Veritatis, ipsam cupiditate.
          </CoverLetter>
        </SectionLeft>
        <SectionRight>
          <AchievementSlot title='Experiencia' height='50'/>
          <AchievementSlot title="Educacion" height='35'/>
        </SectionRight>
      </UIpersonCard>
    </AccountContainer>
  )
}

