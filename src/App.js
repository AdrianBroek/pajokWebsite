import React, {useState, useEffect} from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

//pages
import MainPage from './pages/MainPage'
import PhotoPage from './pages/PhotoPage'
import VideoPage from './pages/VideoPage'
import ContactPage from './pages/ContactPage'
import OmniePage from './pages/AboutMe'
import PhotoOpen from './components/PhotoOpen'
import NoPage from './pages/NoPage'
import Prices from './pages/Prices'
import MoveUp from './components/MoveUp'
// photo pages
import BusinessPhoto from './components/photos/BusinessPhoto'
import FashionPhoto from './components/photos/FashionPhoto'
import WeddingPhoto from './components/photos/WeddingPhoto'
import PortraitPhoto from './components/photos/PortraitPhoto'
import StudioPhoto from './components/photos/StudioPhoto'
// global styles
import GlobalStyles from './components/GlobalStyles';
// router
import { Routes, Route, useLocation, HistoryRouterProps } from "react-router-dom"
// animation
import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'
// nav
import Nav from './components/Nav'
// menu
import Menu from './components/Menu'
// Hamburger
import Hamburger from './components/Hamburger'

// footer
import Footer from './components/Footer'
// context
import {UserProvider} from './components/fetchData/data'

import Overlay from './components/Overlay'

const queryClient = new QueryClient()

function App() {
  const location = useLocation()
  
  // menu state 
  const [open, setOpen] = useState(false)
  
  useEffect(()=> {
    window.scrollTo(0,0)
  }, [location.pathname])

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <GlobalStyles />
      <MoveUp />
      <Overlay open={open} setOpen={setOpen}/>
      <Nav open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
      <Hamburger open={open} setOpen={setOpen}/>
      
      <AnimatePresence 
        exitBeforeEnter
        onExitComplete={()=> {
          window.scrollTo(0,0)
        }}
      >
      <AnimateSharedLayout>
      <UserProvider>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/photo/biznesowe" element={<BusinessPhoto />}>
          <Route path=":id" element={ <PhotoOpen />} />
        </Route>
        <Route path="/photo/Portrety" element={<PortraitPhoto />}>
          <Route path=":id" element={ <PhotoOpen />} />
        </Route>
        <Route path="/photo/Moda" element={<FashionPhoto />}>
          <Route path=":id" element={ <PhotoOpen />} />
        </Route>
        <Route path="/photo/Slubne/*" element={<WeddingPhoto />}>
          <Route path=":id" element={ <PhotoOpen />} />
        </Route>
        <Route path="/photo/Studio/*" element={<StudioPhoto />}>
          <Route path=":id" element={ <PhotoOpen />} />
        </Route>
        <Route path="/video" element={<VideoPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/o-mnie" element={<OmniePage />} />
        <Route path="/cennik" element={<Prices />} />
      </Routes>
      
      </UserProvider>
      </AnimateSharedLayout>
      <Footer />
      </AnimatePresence>
    </div>
    </QueryClientProvider>
  );
}

export default App;
