import { useState, useRef } from 'react';
import { Box, Link, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, } from "@chakra-ui/react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
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

const baseYoutubeUrl = "https://www.youtube.com/watch?v=";
const placeholderImage = "/src/assets/images/pm.png";

const ControlPanel = () => {
  const cancelRef = useRef(null);
  const [videoId, setVideoId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const [videosData, setVideosData] = useState([
    {
      link: '',
      thumbnail: placeholderImage,
      title: 'Titulek není k dispozici',
      description: 'Popis není k dispozici',
      topic: 'Téma není k dispozici'
    }
  ]);

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
  }

  const patchVideo = async () => {
    try {
      const response = await fetch(`http://localhost:5173/api/${videoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: videoId ,
          title: title, 
          link: link, 
          description: description, 
          thumbnail: thumbnail, 
        }),
      });
      const data = await response.json();
      toast.success("Video bylo úspěšně změněno.", {
        autoClose: 1000,
        hideProgressBar: true
      });
      console.log(data);
    } catch (error) {
      toast.error("Nastala chyba při patchování videa.");
      console.error(error);
    }
  };

  
  const deleteVideo = async () => {
    try {
      const response = await fetch(`http://localhost:5173/api/${videoId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        onClose(); // Zavřít dialog
        toast.success("Video bylo úspěšně smazáno.", {
          autoClose: 1000,
          hideProgressBar: true
        });
        setVideosData([{
          link: '',
          thumbnail: placeholderImage,
          title: 'Titulek není k dispozici',
          description: 'Popis není k dispozici',
          topic: 'Téma není k dispozici'
        }]); // Resetovat data videa
        // Zde byste mohl přidat další akce po úspěšném smazání, například obnovit seznam videí
      } else {
        toast.error("Nastala chyba při mazání videa.");
      }
    } catch (error) {
      toast.error("Nastala chyba při mazání videa.");
      console.error("An error occurred while deleting the video.", error);
    }
  };
  
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
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
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
                  <Button colorScheme="red" variant="solid" width="full" mt={4} size="sm" boxShadow="x2" onClick={() => setIsOpen(true)}>Vymazat Video</Button>
                </Box>
              </Box>
              <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                  <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Vymazat Video
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    Opravdu chcete vymazat video?
                  </AlertDialogBody>
                  <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Ne
                  </Button>
                  <Button colorScheme="red" onClick={deleteVideo} ml={3}>
                    Ano
                  </Button>
                  </AlertDialogFooter>    
                  </AlertDialogContent>
                  </AlertDialogOverlay>
              </AlertDialog>   
            </TabPanel>

            <TabPanel>
              <Text as='b'>Titulek:</Text>
              <Editable onChange={setTitle} placeholder={videosData[0].title}>
                <EditablePreview />
                <EditableTextarea />
              </Editable>
              <Divider orientation='horizontal' />
              <Text as='b'>Popis:</Text>
              <Editable onChange={setDescription} placeholder={videosData[0].description}>
                <EditablePreview />
                <EditableTextarea />
              </Editable>
              <Divider orientation='horizontal' />
              <Text as='b'>Odkaz na video:</Text>
              <Editable onChange={setLink} placeholder={videosData[0].link}>
                <EditablePreview />
                <EditableTextarea />
              </Editable>
              <Divider orientation='horizontal' />
              <Text as='b'>Odkaz na obrźek:</Text>
              <Editable onChange={setThumbnail} placeholder={placeholderImage}>
                <EditablePreview />
                <EditableTextarea />
              </Editable>
              <br /><Divider orientation='horizontal' /><br />
              <Button leftIcon={<CheckIcon />} colorScheme='teal' variant='solid' onClick={patchVideo}>
                Uložit změny
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        /> 
      </Stack>
    </>
  );
};

export default ControlPanel;
