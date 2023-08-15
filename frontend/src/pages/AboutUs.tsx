import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

// Každý objekt v poli reprezentuje jednoho autora
const authors = [
  {
    name: 'David R.',
    image: './src/assets/images/david-avatar',
    role: 'CEO',

  },
  {
    name: 'Jaroslav M.',
    image: '',
    role: 'CEO',

  },
  {
    name: 'Robert A.',
    image: '',
    role: 'CEO',

  },
  {
    name: 'Martin V.',
    image: '',
    role: 'CEO',

  },
];

// Flex a Box komponenty z Chakra UI pro úpravy layoutu
// Používá Avatar a Text komponenty pro zobrazení informací o autorovi
const AboutUs = () => (
  <Box p={5}>
    <Flex justify="space-around" wrap="wrap">
      {authors.map((author, index) => (
        <Box
          key={index}
          textAlign="center"
          m={3}
          p={5}
          borderRadius="lg"
          boxShadow="lg"
          bg="black"
        >
          <Avatar size="2xl" name={author.name} src={author.image} />
          <Text mt={2} fontSize="xl" fontWeight="bold">
            {author.name}
          </Text>
          <Text mt={1} fontSize="md" color="gray.600">
            {author.role}
          </Text>
        </Box>
      ))}
    </Flex>
  </Box>
);

export default AboutUs;
