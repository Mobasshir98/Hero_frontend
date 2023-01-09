import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { createCourse } from '../../redux/actions/admin';
import Sidebar from './Sidebar';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import  toast from 'react-hot-toast'

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');
  const [image, setImage] = useState('');
  const [imageprev, setImageprev] = useState('');

  const dispatch = useDispatch()
  const {loading,error,message}=useSelector(state=>state.admin)

  const uploadImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageprev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = (e)=>{
    e.preventDefault()

    const myForm = new FormData();

    myForm.append('title',title)
    myForm.append('description',description)
    myForm.append('creator',creator)
    myForm.append('file',image)

    dispatch(createCourse(myForm))
  }
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:'clearError'})
    }
    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'})
    }
  },[dispatch,error,message])
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container h={'95vh'}>
        <form onSubmit={submitHandler} >
          <VStack mt={'20'} h={'full'} justifyContent="center" spacing={'16'}>
            <Heading textTransform={'uppercase'} color="red.500">
              Create Course
            </Heading>
            <Input
              type={'text'}
              required
              value={title}
              placeholder="Title"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type={'text'}
              required
              value={description}
              placeholder="Description"
              onChange={e => setDescription(e.target.value)}
            />
            <Input
              type={'text'}
              required
              value={creator}
              placeholder="Creator"
              onChange={e => setCreator(e.target.value)}
            />
            <Input
              type={'file'}
              accept="image/*"
              required
              css={{
                '&::file-selector-button': {
                  cursor: 'pointer',
                  marginLeft: '-5%',
                  width: '110%',
                  border: 'none',
                  height: '100%',
                  color: 'red',
                  backgroundColor: 'white',
                },
              }}
              onChange={uploadImage}
            />
            {imageprev && (
              <Image src={imageprev} boxSize="64" objectFit={'contain'} />
            )}
            <Button isLoading={loading} w="full" colorScheme={'red'} type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar/>
    </Grid>
  );
};

export default CreateCourse;
