import { Box, Container, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";

const thumbnails = [
  { id: 1, title: "Movie 1", imageUrl: "https://via.placeholder.com/150" },
  { id: 2, title: "Movie 2", imageUrl: "https://via.placeholder.com/150" },
  { id: 3, title: "Movie 3", imageUrl: "https://via.placeholder.com/150" },
  { id: 4, title: "Movie 4", imageUrl: "https://via.placeholder.com/150" },
  { id: 5, title: "Movie 5", imageUrl: "https://via.placeholder.com/150" },
  { id: 6, title: "Movie 6", imageUrl: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={6} textAlign="center">
        Welcome to My Netflix-like Site
      </Heading>
      <SimpleGrid columns={[2, null, 3]} spacing={10}>
        {thumbnails.map((thumbnail) => (
          <Box key={thumbnail.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={thumbnail.imageUrl} alt={thumbnail.title} />
            <Box p={6}>
              <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {thumbnail.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;