import React, {useState, useEffect} from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

//pages
import MainPage from './pages/MainPage'
import PhotoPage from './pages/PhotoPage'
import VideosPage from './pages/VideosPage'
import ContactPage from './pages/ContactPage'
import OmniePage from './pages/AboutMe'
import PhotoOpen from './components/PhotoOpen'
import NoPage from './pages/NoPage'
import Prices from './pages/Prices'
import MoveUp from './components/MoveUp'
import News from './components/News'
import New from './components/New'
// photo page
import Photo from './components/photos/Photo'
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
// helmet
import { HelmetProvider } from 'react-helmet-async';
import AddPrice from './pages/TryToAddPrice'
import Video from './components/Video'

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
    <HelmetProvider>
      <GlobalStyles />
      <MoveUp />
      <Overlay open={open} setOpen={setOpen}/>
      <Nav open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
      <Hamburger open={open} setOpen={setOpen}/>
      


      <UserProvider>
        
      <Routes location={location} key={location.pathname}>
        <Route meta path="*" element={<NoPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/photo/:id/*" element={ <Photo />} >
          <Route path=":id" element={ <PhotoOpen />} />
        </Route>
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/videos/:id" element={ <Video />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/o-mnie" element={<OmniePage />} />
        <Route path="/cennik" element={<Prices />} />
        <Route path="/aktualnosci" element={<News />} />
        <Route path="/aktualnosci/:id" element={<New />}/>
        <Route path='/user/add' element={<AddPrice />}/>
      </Routes>
      
      </UserProvider>

      <Footer />
    </HelmetProvider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
