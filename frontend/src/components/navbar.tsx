import myImage from "../assets/images/blackscreen.png";

import {
  // ostatní importy ...
  Image,
} from "@chakra-ui/react";

import logo from "../assets/logo/logo.png";
import { ReactNode } from "react";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

//?Routy ZDE! [Název, odkaz]
const Links = [
  ["Main page", "/"],
  ["About us", "/about"],
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: uloadFormIsOpen,
    onOpen: uloadFormOnOpen,
    onClose: uloadFormOnClose,
  } = useDisclosure();

  const [thumbnailUrl, setThumbnailUrl] = useState<string>(myImage);

  const handleThumbnailUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setThumbnailUrl(event.target.value);
  };

  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // Funkce pro změnu stavu
  const handleVideoTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVideoTitle(event.target.value);
  };
  const handleVideoDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setVideoDescription(event.target.value);
  };
  const handleVideoUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
  };

  // Funkce pro odeslání dat na server
<<<<<<< HEAD

  const handleUpload = async () => {
    const videoId = Math.floor(Math.random() * 10000);

    // Extrahování videoId z odkazu na YouTube
    let youtubeVideoId = videoUrl.split("v=")[1];
    const ampersandPosition = youtubeVideoId.indexOf("&");
    if (ampersandPosition !== -1) {
      youtubeVideoId = youtubeVideoId.substring(0, ampersandPosition);
    }

    try {
      const response = await fetch("http://localhost:5173/api", {
        method: "POST",
=======
  const handleUpload = async () => {
    const videoId = Math.floor(Math.random() * 10000);
    
    // Extrahování videoId z odkazu na YouTube
      let youtubeVideoId = videoUrl.split('v=')[1];
      const ampersandPosition = youtubeVideoId.indexOf('&');
      if (ampersandPosition !== -1) {
        youtubeVideoId = youtubeVideoId.substring(0, ampersandPosition);
      }
    
      try {
      const response = await fetch('http://localhost:5173/api', {
        method: 'POST',
>>>>>>> ts-ftontend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: videoId,
          title: videoTitle,
          link: youtubeVideoId,
          topic: "test",
          description: videoDescription,
          ratingsAverage: "0",
          creator: "Admin",
          creationDate: new Date(),
          thumbnail: thumbnailUrl,
        }),
      });
      const data = await response.json();
      console.log(data);

      //restartování modalu při uploadu
      uloadFormOnClose();
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const resetForm = () => {
    setVideoTitle("");
    setVideoDescription("");
    setVideoUrl("");
    setThumbnailUrl(myImage);
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="sticky"
        top={0}
        zIndex={1}
      >
<<<<<<< HEAD
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
=======
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
>>>>>>> ts-ftontend
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img
                src={logo}
                alt="Company logo"
                style={{ width: "65px", height: "65px", cursor: "pointer" }}
                onClick={() => (window.location.href = "/")}
              />
            </Box>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link[1]}>
                  <Link href={link[1]}>{link[0]}</Link>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
              onClick={uloadFormIsOpen ? uloadFormOnClose : uloadFormOnOpen}
            >
              Upload
            </Button>

            <Button
              onClick={toggleColorMode}
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
<<<<<<< HEAD
                <MenuItem>My videos</MenuItem>
                <MenuItem>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>Log out</MenuItem>
=======
                <MenuItem><Link href={'/dashboard'}>Dashboard</Link></MenuItem>
>>>>>>> ts-ftontend
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link[1]}>
                  <Link href={link[1]}>{link[0]}</Link>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Modal isOpen={uloadFormIsOpen} onClose={uloadFormOnClose}>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent>
          <ModalHeader>Nahrání videa:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Název videa</FormLabel>
              <Input
                placeholder="Název videa"
                onChange={handleVideoTitleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Popis videa</FormLabel>
              <Textarea
                placeholder="Popis videa"
                onChange={handleVideoDescriptionChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Odkaz na video</FormLabel>
              <Input
                placeholder="Odkaz na YouTube video"
                onChange={handleVideoUrlChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Náhled videa</FormLabel>
              <Input
                placeholder="Odkaz na náhled videa"
                onChange={handleThumbnailUrlChange}
              />
              {thumbnailUrl && (
                <Image src={thumbnailUrl} alt="Video thumbnail" />
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpload}>
              Upload
            </Button>
            <Button variant="ghost" onClick={uloadFormOnClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
