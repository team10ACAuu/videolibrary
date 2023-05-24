import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "./components/navbar"
import Home from "./pages/home";
import VideoJS from "./pages/VideoJS";

function App() {
  const videoUrl = 'file:///C:/xampp/htdocs/projects/nodejs/video_library_project/frontend/video_library/src/assets/video/SampleVideo_1280x720_1mb.mp4';
  return (
    <ChakraProvider>
      <Navbar/>
      <Home />
      <VideoJS source={videoUrl}/>
    </ChakraProvider>
  )
}

export default App
