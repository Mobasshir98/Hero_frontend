import {
  Avatar,
  Container,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = ({user}) => {

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container minH={'95vh'} maxW="container.lg" py="8">
        <Heading textAlign={'center'} color={'red.500'} m={'8'} textTransform={'uppercase'}>
          Profile
        </Heading>
        <Stack
          justifyContent={'flex-start'}
          direction={['column', 'row']}
          alignItems={'center'}
          spacing={['8', '16']}
          padding="8"
        >
          <VStack>
            <Avatar boxSize={'48'} />
          </VStack>
          <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
            <HStack>
              <Text color={'red.500'} fontWeight={'bold'}>
                Name
              </Text>
              <Text>{user.name}</Text>
            </HStack>
            <HStack>
              <Text color={'red.500'} fontWeight={'bold'}>
                Email
              </Text>
              <Text>{user.email}</Text>
            </HStack>
          </VStack>
        </Stack>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
