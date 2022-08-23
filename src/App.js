import React, {useState} from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

//pages
import MainPage from './pages/MainPage'
import PhotoPage from './pages/PhotoPage'
import VideoPage from './pages/VideoPage'
import Photos from './pages/Photos'
import ContactPage from './pages/ContactPage'
import OmniePage from './pages/AboutMe'
import PhotoOpen from './components/PhotoOpen'
// global styles
import GlobalStyles from './components/GlobalStyles';
// router
import { Routes, Route, useLocation, HistoryRouterProps } from "react-router-dom"
// animation
import {AnimatePresence} from 'framer-motion'
// nav
import Nav from './components/Nav'
// menu
import Menu from './components/Menu'
// footer
import Footer from './components/Footer'

const queryClient = new QueryClient()

function App() {
  const location = useLocation()

  // menu state 
  const [open, setOpen] = useState(false)
  // image state
  const [current, setCurrent] = useState('')
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <GlobalStyles />
      <Nav open={open} setOpen={setOpen}/>
      <Menu open={open}/>
      <AnimatePresence exitBeforeEnter
      onExitComplete={()=> {
        window.scrollTo(0,0)
      }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/photo/:id/*" element={<Photos />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/o-mnie" element={<OmniePage />} />
      </Routes>
      <Footer />
      </AnimatePresence>
    </div>
    </QueryClientProvider>
  );
}

export default App;
