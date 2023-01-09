import {
    Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { React, useState } from 'react';
import  toast  from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCourse, getCourses } from '../redux/actions/course';
import { myProfile } from '../redux/actions/user';

const Courses = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const dispatch = useDispatch()
  const {loading,courses,error,message} = useSelector(state=>state.course)
  const addCourseHandler = async (title)=>{
   await dispatch(addCourse(title))
   dispatch(myProfile())
    if(error){
      toast.error(error)
      dispatch({type:'clearError'});
    }
    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'});
    }
  }
  useEffect(()=>{
    dispatch(getCourses(searchTerm))
    if(error){
      toast.error(error)
      dispatch({type:'clearError'});
    }
    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'});
    }
  
  },[searchTerm,dispatch,error,message])
  const Course = ({
    title,
    imageSrc,
    id,
    description,
    creator,
    addCourseHandler,
    loading
  }) => {
    return (
      <VStack className="course" alignItems={['center', 'flex-start']}>
        <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
        {/* <img src={imageSrc} style={{objectFit:'contain'}} /> */}
        <Heading
          textAlign={['center', 'left']}
          size={'sm'}
          maxW="200px"
          fontFamily={'sans-serif'}
          noOfLines={3}
          textTransform={'uppercase'}
        >
          {title}
        </Heading>
        <Text noOfLines={2}>{description}</Text>
        <HStack>
          <Text textTransform="uppercase" fontWeight={'bold'}>
            Creator
          </Text>
          <Text
            fontFamily={'body'}
            textTransform="uppercase"
          >
            {creator}
          </Text>
        </HStack>
        <Stack direction={['column','row']} alignItems='center' >
<Link to={`/course/${title}`}>
    <Button colorScheme={'red'} >
        Explore Program
    </Button>
</Link>
<Button  variant={'ghost'} colorScheme={'red'} onClick={()=>addCourseHandler(title)} >
        Add Course
        </Button>
        </Stack>
      </VStack>
    );
  };

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading m={'8'}>All Courses</Heading>
      <Input
        type={'text'}
        onChange={e => setsearchTerm(e.target.value)}
        placeholder="Search.."
        value={searchTerm}
      />
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {
          courses?.length>0?(
            courses?.map((course,index)=>{
             return <Course
              title={course.title}
              key={index}
              description={course.description}
              imageSrc={course.image}          
              // id={'sample'}
              creator={course.creator}
              addCourseHandler={addCourseHandler}
              loading={loading}
            />
            })
          ):(
            <Heading mt={'5'} fontSize={'2rem'} color={'red.400'} >No Course Found </Heading>
          )

        }
       
      </Stack>
    </Container>
  );
};

export default Courses;
