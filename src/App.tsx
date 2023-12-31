//global style
import './App.css'

// React Router
import { Route, Routes } from "react-router-dom"

// Pages
import { LandingPage, Signup, SignIn, Reel, Feed, Profile } from "./pages"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/reel" element={<Reel/>}/>
      <Route path='/feed' element={<Feed/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App
