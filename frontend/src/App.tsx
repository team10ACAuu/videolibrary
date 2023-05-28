import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/navbar"
import Home from "./pages/home";
import VideoJS from "./pages/VideoJS";

function App() {
  const videoUrl = 'file:///C:/xampp/htdocs/projects/nodejs/video_library_project/frontend/video_library/src/assets/video/SampleVideo_1280x720_1mb.mp4';
  return (
    <ChakraProvider>
      <Navbar/>
      <Box p={4}>
        <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="blogs" element={<VideoJS source={videoUrl}/>} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  )
}

export default App
