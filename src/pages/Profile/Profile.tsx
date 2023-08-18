import { ProfilePageContainer } from "./styled-component"
import { AsideMenu } from "./components"

import { ProfilePageSelector, ComponentArr } from "../../interfaces"

import { useEffect, useState } from "react"

// Components 4 list
import { Setting, User } from "./pages"

export const Profile = () => {

    const [page, setPage] = useState<ProfilePageSelector>({
        current : '',
        components : [{
            name : 'profile',
            component : <User/>
        },
        {
            name : 'setting',
            component : <Setting/>
        }]
    })

    const setSelectedComponent = () => {
        let currentView = page.components.find((item : ComponentArr) => item.name === page.current)
    
        if(currentView) return currentView.component

        return page.components[0].component;
    }

    useEffect( () => {
        () => {
            return 
        }
    },[page])

    return (
        <ProfilePageContainer>
        <AsideMenu 
          setPage={setPage}/>
        {
            setSelectedComponent()
        }
        </ProfilePageContainer>
    )
}
