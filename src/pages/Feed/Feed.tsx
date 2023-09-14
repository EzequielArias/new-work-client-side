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
import { useState } from "react";

export const Feed = () => {
  const dispatch = useDispatch();
  
  const { posts } = useSelector((state : StoreType) => state.posts)
  const { loading, callEndpoint } = useFetchAndLoad();
  const [ offset, setOffset] = useState<number>(0);

  
  let at : string | null = localStorage.getItem('current_user');

  const handleScroll = () => {
    if (
        window.innerHeight + document.documentElement.scrollTop + 2 >=
        document.documentElement.scrollHeight
      ) {
        if(loading) return;
        setOffset((prev) => prev + 2);
      }
  }
// El loader se activa cada vez que llego al final de la pagina realizar un loader para 
//el final de la pagina y otro para la primera vez que se carga el componente
  useEffect(() => {
    if(at){
      let parse : Token = JSON.parse(at)
      const result = async () => {
        if(loading) return;
        let { data } = await callEndpoint(getManyPosts(2,offset, parse));
        let res = PostStructure(data)
        dispatch(fillPost(res))
      }
      result()
    }
    return () => {

    }
  },[offset])

  useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll',handleScroll);
  }, [])

  return (
    <>
        <Navbar/>
        <PostForm/>
        
        {
          posts.length > 0 ?
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
          ) : 
          (
            <>
            <Loader/>
            </>
          )
        }
        { loading && <Loader/> }
    </>
   )
}

