import {
    PostHeaderContainer,
    PostBox,
    PostsContainer,
    PostFooterContainer,
    ItemBtn,
    TextBtn,
    PostsOwnerName,
    PostOwnerSubTitle,
    HeaderSection,
    Description,
    PostImages
} from "./styled-components"
import image from '../../assets/TheWitcher.jpg'
import {
    AiFillHeart,
    AiOutlineComment,
    AiOutlineShareAlt
} from 'react-icons/ai'
import { ProfileImg } from "../../styled-components"

export const PostCard = () => {
    return (
        <PostsContainer>
            <PostHeaderContainer>
                <ProfileImg src={image} alt=""/>
                <HeaderSection>
                 <PostsOwnerName>The Witcher</PostsOwnerName>
                 <PostOwnerSubTitle>EL mago mas poderoso de akzaban</PostOwnerSubTitle>
                </HeaderSection>
            </PostHeaderContainer>
            <PostBox>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eum dolore dolorum at reprehenderit animi quasi tempore id error voluptatum quas quos quibusdam aspernatur, aut sunt quisquam omnis aliquam rem.
                    Molestiae dolor atque vitae sunt. Architecto labore facilis, natus nesciunt ad nulla saepe velit, quis perferendis inventore eaque provident eum commodi dolor, tempore maiores veniam? Doloremque doloribus animi quo quaerat?
                </Description>
                <PostImages src={image} alt=""/>
            </PostBox>
            <PostFooterContainer>

                <ItemBtn>
                    <AiFillHeart />
                    <TextBtn>Me gusta</TextBtn>
                </ItemBtn>
                <ItemBtn>
                    <AiOutlineComment />
                    <TextBtn>Comentar</TextBtn>
                </ItemBtn>
                <ItemBtn>
                    <AiOutlineShareAlt />
                    <TextBtn>Compartir</TextBtn>
                </ItemBtn>

            </PostFooterContainer>
        </PostsContainer>
    )
}

