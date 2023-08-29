import { PostCard, Navbar, PostForm } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { StoreType } from "../../redux/store";
import { useFetchAndLoad } from "../../hooks";
import { Loader } from "../../styled-components";
import { useEffect } from "react";
import { PostStructure } from "../../adapters";
import { getManyPosts } from "../../services";
import { Token } from "../../interfaces";
import { fillPost } from "../../redux/states";

export const Feed = () => {
  const dispatch = useDispatch();
  
  const { posts } = useSelector((state : StoreType) => state.posts)
  const { loading, callEndpoint } = useFetchAndLoad();

  let at : string | null = localStorage.getItem('current_user');

  useEffect(() => {
    if(at){
      let parse : Token = JSON.parse(at)
      const result = async () => {
        let { data } = await callEndpoint(getManyPosts(5,0, parse))
        let res = PostStructure(data)
        dispatch(fillPost(res))
      }
      result()
    }
    return () => {

    }
  },[])

  return (
    <>
        <Navbar/>
        <PostForm/>
        <>
        {
          loading 
          ? 
          (
            <Loader/>
          )
          : 
          (
            <>
            {
          posts.map((currentPost) => {
            return (
              <PostCard
              images={currentPost.images}
              user={currentPost.account.name}
              description={currentPost.description}
              userSubTitle={`El ingeniero ${currentPost.account.name}`}
              userProfile={currentPost.account.image}
              />
            )
          })
        }
        </>
          )
        }
        </>
    </>
   )
}

