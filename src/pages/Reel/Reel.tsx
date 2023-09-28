import { 
  AccounCard, 
  Navbar
      } from "../../components"

// Redux hooks
import { useDispatch, useSelector } from "react-redux"

//React Hooks
import { useEffect, useState, useRef } from "react";

// Actions & services
import { fillCandidates } from "../../redux/states";
import { getCandidates } from "../../services";

//Custom Hooks
import { useFetchAndLoad } from "../../hooks";
import { Token } from "../../interfaces";
import { StoreType } from "../../redux/store";

// Adapter
import { CandidateAdapter } from "../../adapters";

import { Loader } from "../../styled-components";
import { LeftArrow, RelativeContainer, RightArrow } from "./styled-components";

export const Reel = () => {

  const at : Token = JSON.parse(localStorage.getItem('current_user') as string);

  const dispatch = useDispatch();
  const listRef = useRef<HTMLUListElement>(null);
  const { candidates } = useSelector((state : StoreType) => state.candidates);
  const { callEndpoint, loading } = useFetchAndLoad();
  const [ currentIndexCard, setCurrentIndexCard] = useState(0)

  const handleIndexCard = (action : string) => {
    if(action === 'foward')
    {
      if(currentIndexCard + 1 >= candidates.length) return;
      setCurrentIndexCard(currentIndexCard + 1);
    }
  
    if(action === 'back')
    {
      if(currentIndexCard <= 0) return;
      setCurrentIndexCard(currentIndexCard - 1);
    }
  }

  useEffect(() => {
    const fetchCantidates = async () => {
      const { data } = await callEndpoint(getCandidates(at));
      // this have to change because data dont match with the interface(made an adapter)
      const adapt = CandidateAdapter(data)
      dispatch(fillCandidates(adapt))

    }
    fetchCantidates()
    return () => {
      
    }
  }, [])
  
  useEffect(() => {
    if(listRef.current){
      let listCurrent = listRef.current

      if(listCurrent.querySelector("li > div")){
      let cardNode = listCurrent.querySelectorAll("li > div")[currentIndexCard]
        if(cardNode)
        {
          cardNode.scrollIntoView({
            behavior : "smooth"
          })
        }}
      }

    

  },[currentIndexCard])

  return (
    <>
        <Navbar/>
        {
          loading 
          ? ( <Loader/> ) 
          : (
            <RelativeContainer>
              <LeftArrow onClick={() => handleIndexCard('back')}/>
              <RightArrow onClick={() => handleIndexCard('foward')}/>
              <ul ref={listRef} style={{width : '100%'}}>
              {
              candidates.map((person, index) => {
                return (
                  <li key={index}>
                    <AccounCard
                   id={person.id}
                   name={person.name}
                   subtitle={person.subtitle}
                   coverLetter={person.coverLetter}
                   workExperience={person.workExperience}
                   academic={person.academic}
                   image={person.image}
                  />
                  </li>
                )
              })
            }
              </ul>
            </RelativeContainer>
          )
        }
    </>
  )
}

