import { useState } from 'react';
import { Box, Link } from "@chakra-ui/react";


import {
  Stack,
  Input,
  IconButton,
  Editable,
  EditableTextarea,
  EditablePreview,
  Tabs, 
  TabList, 
  Divider,
  TabPanels, 
  Tab, 
  TabPanel,
  Button,
  Text,
} from '@chakra-ui/react';

import { CheckIcon, SearchIcon } from '@chakra-ui/icons';



const placeholderImage = "/src/assets/images/pm.png";

const ControlPanel = () => {
    const [videoId, setVideoId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("");
    const [link, setLink] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [videosData, setVideosData] = useState(
        [
          {
            link: '',
            thumbnail: placeholderImage,
            title: 'Pro zobrazení vyhledejte video',
            description: 'Pro zobrazení vyhledejte video',
            topic: ''
          }
        ]
    );

    const baseYoutubeUrl = "https://www.youtube.com/watch?v=";


    const getVideo = () => {
        const fetchVideoData = async () => {
          const response = await fetch('/api/'+videoId)
          //console.table(response);
          const json = await response.json()
          if(response.ok) {
            setVideosData(json)
            }
          }
    
          try {
            fetchVideoData()
          }
          catch {
            console.log("Can't reach /")
          }
          fetchVideoData();
    };

    const patchVideo = async () => {
          try {
          const response = await fetch('http://localhost:5173/api/'+videoId, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: videoId ,
              title: title, 
              link: link, 
              topic: topic, 
              description: description, 
              thumbnail: thumbnail,
              
            }),
          });
          const data = await response.json();
          console.log(data);

    
        } catch (error) {
          console.error("Error:", error);
        }
    };

    console.log(title, description);

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

              
              
              
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <img alt="Thumbnail" src={videosData[0].thumbnail} style={{width: "100%"}} />


        <Box p="6">
            <Box display="flex" alignItems="baseline">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    <Text fontSize="x0.5" fontWeight="bold" color="grey">Název: </Text> 
                    {videosData[0].title}
                </Box>
            </Box>
            <Divider borderColor="gray.600" my={2}/>

            <Box mt="1">
                <Text fontSize="x0.5" fontWeight="bold" color="grey">Popis: </Text> 
                {videosData[0].description}
            </Box>
            <Divider borderColor="gray.600" my={2}/>

            <Box mt="2">
                <Text fontSize="x0.5" fontWeight="bold" color="grey">Odkaz na video: </Text>
                <Link href={baseYoutubeUrl + videosData[0].link} isExternal>
                    {baseYoutubeUrl + videosData[0].link}
                </Link>
            </Box>
            <Divider borderColor="gray.600" my={2}/>

            <Box mt="2">
                <Text fontSize="x0.5" fontWeight="bold" color="grey">Odkaz na miniaturu: </Text>
                <Link href={videosData[0].thumbnail} isExternal>
                    {videosData[0].thumbnail}
                </Link>
            </Box>
            <Divider borderColor="gray.600" my={2}/>

            <Button colorScheme="red" variant="solid" width="full" mt={4} size="sm" boxShadow="x2">Vymazat Video</Button>
        </Box>
    </Box>
  


      </TabPanel>
                <TabPanel>
                  <Editable onChange={setTitle} placeholder={videosData[0].title}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <Editable onChange={setDescription} placeholder={videosData[0].description}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <Editable onChange={setTopic} defaultValue={videosData[0].topic} placeholder={videosData[0].topic}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <Editable onChange={setLink} defaultValue={videosData[0].link} placeholder={videosData[0].link}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <Editable onChange={setThumbnail} defaultValue={videosData[0].thumbnail} placeholder={placeholderImage}>
                      <EditablePreview />
                      <EditableTextarea />
                  </Editable>
                  <IconButton onClick={patchVideo} aria-label='Search database' icon={<CheckIcon />} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </> 
    );
};

export default ControlPanel;