import { useState, useRef } from 'react';
import { Box, Link, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, } from "@chakra-ui/react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';






import Patch from "../components/dashboard/patch";

import {
  Stack,
  Input,
  IconButton,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';


const baseYoutubeUrl = "https://www.youtube.com/watch?v=";
const placeholderImage = "/src/assets/images/pm.png";

const ControlPanel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [videosData, setVideosData] = useState([
    {
      link: '',
      thumbnail: placeholderImage,
      title: 'Titulek není k dispozici',
      description: 'Popis není k dispozici',
      topic: 'Téma není k dispozici'
    }
  ]);

  //const [title, setTitle] = useState(videosData[0].title);
  //const [description, setDescription] = useState(videosData[0].description);
  //const [link, setLink] = useState(videosData[0].link);
  //const [thumbnail, setThumbnail] = useState(videosData[0].thumbnail);

  const getVideo = () => {
    const fetchVideoData = async () => {
      const response = await fetch('/api/'+videoId);
      const json = await response.json();
      if(response.ok) {
        setVideosData(json);
      }
    }
    try {
      fetchVideoData();
    } catch (error) {
      console.log("Can't reach /", error);
    }
    catch {
      console.log("Can't reach /")
    }
    fetchVideoData();
    setIsLoaded(true);
  };
  console.log(isLoaded);

  return ( 
    <>
      <Stack spacing={3}>
        <Input onChange={(e) => setVideoId(e.target.value)} placeholder='id' size='md' />
        <IconButton onClick={getVideo} aria-label='Search database' icon={<SearchIcon />} />
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Vlastnosti</Tab>
            <Tab>Úpravy</Tab>
          </TabList>
          <TabPanels>
          <TabPanel>
            <Box boxSize="small">
              <img src="path/to/your/image.jpg" alt="Description" />
            </Box>
          <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Název</Th>
                    <Th>Popisek</Th>
                    <Th>Odkaz</Th>
                  </Tr>
                </Thead>
              <Tbody>
                <Tr>
                  <Td>{videosData[0].title}</Td>
                  <Td>{videosData[0].description}</Td>
                  <Td>{videosData[0].link}</Td>
                </Tr>
              </Tbody>
          </Table>
          </TabPanel>
            <TabPanel>
              {isLoaded && <Patch id={videoId} initData={videosData[0]} />}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </> 
  );
}
 
export default ControlPanel;
