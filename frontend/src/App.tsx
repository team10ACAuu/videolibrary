import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/navbar"
import Home from "./pages/home";
import Dashboard from "./pages/ControlPanel"
import VideoJS from "./pages/VideoJS";
import Upload from "./pages/upload"
import Card from "./components/card"
import Video from "./pages/video"
import YT from "./components/ytplayer"

function App() {
  const videoUrl = 'file:///C:/xampp/htdocs/projects/nodejs/video_library_project/frontend/video_library/src/assets/video/SampleVideo_1280x720_1mb.mp4';
  return (
    <ChakraProvider>
      <Navbar/>
      <Box p={4} className="container">
        <BrowserRouter>
          <Routes>
              <Route 
                index 
                element={<Home />} 
              />
              <Route 
                path="/about" 
                element={
                  <VideoJS 
                    source={videoUrl} 
                  />
                } 
              />
              <Route 
                path="/dashboard" 
                element={<Dashboard />} 
              />
              <Route 
                path="/upload" 
                element={<Upload />} 
              />
              <Route 
                path="/card" 
                element={
                  <Card 
                    thumbnail='https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/nodejs-reference-architecture_1x.png?itok=MqGeWTLm'
                    title='NodeJS tutorial'
                    description='test123'
                    videoId={'N1QStjH1rVI'}
                  />
                } 
              />
              <Route 
                path="/video" 
                element={<Video />} 
              />
              <Route 
                path="/youtube" 
                element={<YT videoId='N1QStjH1rVI'/>} 
              />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  )
}

export default App
