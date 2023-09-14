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
    PostImages,
    CardRelative,
    CardArrowPrevius
} from "./styled-components";
import {
    AiFillHeart,
    AiOutlineComment,
    AiOutlineShareAlt
} from 'react-icons/ai'
import { ProfileImg } from "../../styled-components";
import { CardArrowNext } from "./styled-components";
import { PostCardData } from "../../interfaces";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export const PostCard = ({
    images,
    user,
    userSubTitle,
    description,
    userProfile
}: PostCardData) => {

    const [ indexImg, setIndexImg ] = useState<number>(0)

    const handleMovement = (direction : string) => {
        if(direction === 'next'){
            if(images.length - 1 >= indexImg + 1) setIndexImg(prev => prev + 1)
            else setIndexImg(0)
        }

        if(direction === 'previus'){
            if(0 <= indexImg - 1) setIndexImg(prev => prev - 1)
            else setIndexImg(images.length - 1)
        }
    }

   
    
    return (
        <PostsContainer>
            <PostHeaderContainer>
                <ProfileImg src={userProfile} alt="" />
                <HeaderSection>
                    <PostsOwnerName>{user}</PostsOwnerName>
                    <PostOwnerSubTitle>{userSubTitle}</PostOwnerSubTitle>
                </HeaderSection>
            </PostHeaderContainer>
            <PostBox>
                <Description>
                    {description}
                </Description>
                <>
                    {
                        images.length > 0
                            ?
                            (
                                <CardRelative>
                                <CardArrowNext onClick={() => handleMovement('next')}><IoIosArrowForward/></CardArrowNext>
                                <CardArrowPrevius onClick={() => handleMovement('previus')}><IoIosArrowBack/></CardArrowPrevius>
                                <PostImages src={images[indexImg]} alt={user}/>
                                </CardRelative>
                            )
                            :
                            ""
                    }
                </>
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

