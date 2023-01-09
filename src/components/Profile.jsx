import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCourse } from '../redux/actions/course';
import { myProfile } from '../redux/actions/user';

const Profile = ({user}) => {
  const dispatch = useDispatch()

  const {loading,error,message}=useSelector(state=>state.course)
 
  const removeCourseHandler = async course => {
   await dispatch(removeCourse(course))
   if(error){
    toast.error(error)
    dispatch({type:"clearError"})
   }
   if(message){
    toast.success(message)
    dispatch({type:"clearMessage"})
   }
   dispatch(myProfile())
  
  };
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:'clearError'});
    }
    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'});
    }
  
  },[dispatch,error,message])
  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">
      <Heading color={'red.500'} m={'8'} textTransform={'uppercase'}>
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
      <Heading color={'red.300'} textAlign={'left'} fontSize={'2rem'} my="8">
        My Courses
      </Heading>
      {user?.courses?.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p="4"
        >
          {user.courses.map((data, index) => (
            <VStack key={index} w={'48'} m="2">
                
             <Image boxSize={'60'} objectFit="contain" src={data.image} />
              <Heading color={'red.300'} textTransform={'uppercase'} fontSize={'larger'} >{data.course}</Heading>
              <HStack>
                <Link to={`/course/${data.course}`}>
                  <Button variant={'ghost'} colorScheme="red">
                    {' '}
                    Explore Now
                  </Button>
                </Link>
                <Button  colorScheme={'red'} onClick={()=>removeCourseHandler(data.course)}>
                  <RiDeleteBin5Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default Profile;
